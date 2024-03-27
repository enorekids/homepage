import { Banner } from './components/Banner';
import { BusinessProject } from './components/BusinessProject';
import { CompanyInfo } from './components/CompanyInfo';
import { Description } from './components/Description';
import { Footer } from './components/Footer';
import { Philosophy } from './components/Philosophy';
import { Scope } from './components/Scope';

export function App() {
  return (
    <div className='h-full w-full mx-auto relative'>
      <Banner />
      <Description />
      <Scope />
      <Philosophy />
      <CompanyInfo />
      <BusinessProject />
      <Footer />
    </div>
  );
}
