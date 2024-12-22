import { BeakerIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function Label() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: BeakerIcon,
              title: "Premium Quality",
              description: "Built with the finest materials"
            },
            {
              icon: SparklesIcon,
              title: "Crystal Clear Sound",
              description: "Experience music like never before"
            },
            {
              icon: HeartIcon,
              title: "Comfort First",
              description: "Designed for long listening sessions"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}