import { Phone, Mail, MapPin   } from 'lucide-react';

function TopNavbar() {


  return (
    <div className="py-4 flex gap-10 px-50 items-center bg-gray-100 "  aria-live="polite">
      <div className='flex items-center justify-center gap-1.5'>
        <Phone className='w-3 text-gray-700' strokeWidth={2.5}/>
        <p className='text-sm font-bold text-gray-700'>+19083142247</p>
      </div>
        <div className='flex items-center justify-center gap-1.5'>
        <Mail className='w-3 text-gray-700' strokeWidth={2.5}/>
        <p className='text-sm font-bold text-gray-700'>info@digital-sprints.com</p>
      </div>
      <div className='flex items-center justify-center gap-1.5'>
        <MapPin className='w-3 text-gray-700' strokeWidth={2.5}/>
        <p className='text-sm font-bold text-gray-700'>732 Eaton St, Elizabeth, NJ 07202-1618</p>
      </div>
    </div>
  );
}

export default TopNavbar;