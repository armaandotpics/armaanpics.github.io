import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { GalleryImage } from "@shared/schema";

export default function Gallery() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: images = [], isLoading } = useQuery<GalleryImage[]>({
    queryKey: ['/api/gallery'],
  });

  const uploadMutation = useMutation({
    mutationFn: async (files: File[]) => {
      const formData = new FormData();
      files.forEach(file => {
        formData.append('images', file);
      });
      
      const response = await apiRequest('POST', '/api/gallery/upload', formData);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/gallery'] });
      setSelectedFiles([]);
      toast({
        title: "Success",
        description: "Images uploaded successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleFileSelect = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files).filter(file => file.type.startsWith('image/'));
      setSelectedFiles(prev => [...prev, ...fileArray]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      uploadMutation.mutate(selectedFiles);
    }
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            Check out some of my recent work capturing the best moments in high school sports.
          </p>
        </div>

        {/* Image Upload Interface */}
        <div className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Manage Gallery Images</h3>
          
          <div 
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-accent transition-colors duration-200 cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-lg font-medium text-gray-700 mb-2">Upload Your Images</p>
            <p className="text-neutral">Drag and drop files here, or click to select</p>
            <input 
              type="file" 
              multiple 
              accept="image/*" 
              className="hidden" 
              ref={fileInputRef}
              onChange={(e) => handleFileSelect(e.target.files)}
            />
          </div>

          {/* Selected Files Preview */}
          {selectedFiles.length > 0 && (
            <div className="mt-6">
              <h4 className="font-medium mb-4">Selected files ({selectedFiles.length}):</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="relative">
                    <img 
                      src={URL.createObjectURL(file)} 
                      alt={file.name}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <p className="text-xs mt-1 truncate">{file.name}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={handleUpload}
                disabled={uploadMutation.isPending}
                className="bg-primary hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50"
              >
                {uploadMutation.isPending ? 'Uploading...' : 'Upload Images'}
              </button>
            </div>
          )}
        </div>

        {/* Portfolio Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg aspect-square bg-gray-200">
                <img 
                  src={`/api/gallery/image/${image.filename}`} 
                  alt={image.caption || image.originalName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{image.caption || "Sports Action"}</p>
                    <p className="text-sm">{image.category || "High School Sports"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-semibold mb-2">No images yet</h3>
            <p className="text-neutral">Upload some images to start building your portfolio.</p>
          </div>
        )}
      </div>
    </section>
  );
}
