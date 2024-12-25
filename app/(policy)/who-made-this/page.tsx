import Markdown from "@/components/markdown";
import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Who Made the Sounds for sprunki?",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEB_URL}/who-made-the-sounds-for-sprunki`,
    },
  };
}

export default function WhoMadeTheSounds() {
  const content = `# Who Made the Sounds for sprunki?

## The Creative Team

The sounds for sprunki Music Mixer (sprunki.to) were inspired by the original beatbox concept of Incredibox, but have been reimagined and recreated to provide a unique musical experience. Our team has developed a fresh take on interactive music creation while respecting the original concept.

## The Development Story

The sprunki project emerged from a passion for interactive music and digital creativity:

- **Sound Design Team** - Professional musicians and voice artists
- **Development Team** - Experienced programmers and interactive designers
- **Creative Team** - Digital artists and UI/UX specialists

Together, they've created an engaging platform that makes music creation accessible and fun for everyone.

## Musical Evolution

The sprunki Music Mixer features various musical styles and sound collections:

### Free Version Features
- **Classic Mix** - Traditional beatbox sounds with modern twists
- **Pop Fusion** - Contemporary pop music elements
- **Electronic Vibes** - Electronic music inspired sounds
- **Hip-Hop Elements** - Urban music influences

### Premium Collections
- **World Beats** - Global music influences
- **Future Bass** - Modern electronic music styles
- **Retro Wave** - Classic electronic music sounds
- **Urban Mix** - Contemporary urban music elements
- **Digital Fusion** - Experimental sound combinations

## Sound Design Philosophy

Our sound design team focuses on:

- Creating unique, high-quality sound samples
- Ensuring perfect loop synchronization
- Developing complementary sound combinations
- Maintaining musical coherence across different styles

## Community Impact

The sprunki Music Mixer platform has gained recognition for:
- Intuitive music creation interface
- High-quality sound design
- Educational value in music creation
- Creative community engagement

## Future Development

We continue to expand our sound library with:
- Regular updates with new sound collections
- Community-inspired sound packs
- Collaborative features for music creation
- Enhanced sharing capabilities

## Join Our Community

Be part of the sprunki creative community:
- Share your musical creations
- Collaborate with other creators
- Participate in community events
- Suggest new features and sounds

Visit [sprunki.to](https://sprunki.to) to start creating your own music today!

Last updated: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;

  return (
    <div>
      <Link className="text-base-content cursor-pointer" href="/">
        <MdOutlineHome className="text-2xl mx-8 my-8" />
      </Link>
      <div className="max-w-3xl mx-auto leading-loose pt-4 pb-8 px-8">
        <Markdown content={content} />
      </div>
    </div>
  );
} 