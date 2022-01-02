import React from 'react';
import { Hero } from '../Hero/Hero';
import { About } from '../About/About';
import { Portfolio } from '../Portfolio/Portfolio';
export const Home =({handleNavigation})=>(
<React.Fragment>
<Hero />
              <About handleNavigation={handleNavigation} />
              <Portfolio />
</React.Fragment>
)