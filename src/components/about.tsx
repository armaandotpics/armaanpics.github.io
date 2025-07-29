import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-square bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <User className="w-20 h-20 mx-auto mb-4" />
                <p className="font-medium">Your Photo Here</p>
                <p className="text-sm">Upload via Image Manager</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-neutral">
              I'm a passionate high school sports photographer and videographer based in Walpole, MA. 
              I specialize in capturing the intensity, emotion, and defining moments of high school and 
              club-level games across the Boston area.
            </p>
            <p className="text-lg leading-relaxed text-neutral">
              My mission is simple: deliver clean, fast, and fully customized content that showcases 
              each player's unique talents and every team's spirit. Whether it's a game-winning shot, 
              a celebration, or the quiet determination before a play, I'm there to capture it all.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-gray-100 text-primary px-4 py-2 rounded-full font-medium">Sports Photography</span>
              <span className="bg-gray-100 text-primary px-4 py-2 rounded-full font-medium">Videography</span>
              <span className="bg-gray-100 text-primary px-4 py-2 rounded-full font-medium">Highlight Reels</span>
              <span className="bg-gray-100 text-primary px-4 py-2 rounded-full font-medium">Team Content</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
