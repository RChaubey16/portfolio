import Tag from '@/components/ui/Tag';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-dark-a10 rounded-sm border border-dark-a30 relative group transition-all duration-300">
          {/* Image */}
          <div className="group-hover:opacity-0 transition-opacity duration-300">
            <h2 className="text-xl font-bold text-white mb-2">Roast My Drupal</h2>
            <p className="text-white">
              Roast My Drupal is a tool that allows you to roast your Drupal
              website.
            </p>
            <div className='mt-6 flex gap-2 flex-wrap'>
              <Tag label='Next.js' />
              <Tag label='TypeScript' />
              <Tag label='Node.js' />
              <Tag label='Express' />
              <Tag label='PostgreSQL' />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-a10/90 to-white/20 backdrop-blur-sm rounded-sm pointer-events-none"></div>
            <Link 
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 bg-white text-dark-a10 rounded-md font-medium hover:bg-opacity-100 transition-colors z-20"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
