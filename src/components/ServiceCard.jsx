import { Link } from 'react-router-dom';
import { Clock, Tag, ChevronRight, Calendar } from 'lucide-react';

export default function ServiceCard({ service, onBookNow }) {
  return (
    <article className="group bg-white border border-[#E8DFD1] hover:border-[#B77A60] transition-all duration-300 flex flex-col h-full shadow-2xs hover:shadow-xl rounded-sm overflow-hidden">
      {/* Service Image with subtle zoom and warm overlay */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F1EADF]">
        <img
          src={service.image}
          alt={`${service.name} at Jyotika Spa Thane`}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#40352E]/30 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <Link
            to={`/treatments/${service.slug}`}
            className="block focus:outline-none"
          >
            <h3 className="font-serif text-xl sm:text-2xl text-[#40352E] font-normal tracking-tight group-hover:text-[#B77A60] transition-colors">
              {service.name}
            </h3>
          </Link>
          <p className="text-xs text-[#5A4E46] font-light leading-relaxed line-clamp-3">
            {service.shortDescription || service.description}
          </p>
        </div>

        {/* Duration & Pricing consultation */}
        <div className="pt-3 border-t border-[#E8DFD1]/70 flex items-center justify-between text-[11px] text-[#777B57]">
          <div className="flex items-center space-x-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center space-x-1.5 font-medium">
            <Tag className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>{service.price}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <Link
            to={`/treatments/${service.slug}`}
            className="inline-flex items-center justify-center px-3 py-2.5 text-[11px] tracking-[0.14em] uppercase font-medium text-[#40352E] bg-[#FAF9F6] hover:bg-[#F1EADF] border border-[#E8DFD1] transition-all rounded-xs cursor-pointer"
          >
            <span>Learn More</span>
            <ChevronRight className="w-3 h-3 ml-1 text-[#B77A60]" />
          </Link>

          <button
            type="button"
            onClick={() => onBookNow(service)}
            className="inline-flex items-center justify-center px-3 py-2.5 text-[11px] tracking-[0.16em] uppercase font-medium text-white bg-[#40352E] hover:bg-[#B77A60] transition-all rounded-xs cursor-pointer shadow-2xs border border-[#40352E]"
          >
            <Calendar className="w-3 h-3 mr-1 text-[#E8DFD1]" />
            <span>Book</span>
          </button>
        </div>
      </div>
    </article>
  );
}
