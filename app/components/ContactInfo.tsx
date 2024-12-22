import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactInfo() {
  return (
    <div className="bg-indigo-900 text-white p-8 rounded-lg">
      <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
      <div className="space-y-4">
        <div className="flex items-center">
          <PhoneIcon className="h-6 w-6 mr-3" />
          <span>+92 (322) 861-0447</span>
        </div>
        <div className="flex items-center">
          <EnvelopeIcon className="h-6 w-6 mr-3" />
          <span>sinceauraagency@gmail.com</span>
        </div>
        <div className="flex items-center">
          <MapPinIcon className="h-6 w-6 mr-3" />
          <span>123 Block B North Nazimabad Karachi, PK</span>
        </div>
      </div>
    </div>
  );
}