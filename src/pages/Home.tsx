// component
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Icon
import { Search } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {' '}
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Search for a country..."
          className="shadow-md"
        />
        <Button type="submit" variant="outline" className="shadow ">
          <span>
            <Search size={19} />
          </span>
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </div>
  );
}
