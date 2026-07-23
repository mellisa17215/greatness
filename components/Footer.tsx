import Link from 'next/link';
import { site } from '../data/site';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-8 mt-12">
      <div className="container mx-auto px-6 text-sm text-gray-700 flex flex-col sm:flex-row sm:justify-between gap-2">
        <div>
          <div className="font-semibold">{site.companyName}</div>
          <div>
            <a href={site.companyUrl} className="text-greatness-teal underline">{site.companyUrl.replace(/^https?:\/\//, '')}</a>
          </div>
        </div>
        <div>
          <div>Contact</div>
          <div>
            <a href={`tel:+${site.phone}`} className="underline">+{site.phone}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
