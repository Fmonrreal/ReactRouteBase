import { Routes, Route } from 'react-router-dom';

// import { Navbar } from '../components/ui/Navbar';

import Page1 from '../components/Page1';
import Page2 from '../components/Page2';


export const DashboardRoutes = () => {
    return (
        <>
            {/* <Navbar /> */}

            <div className="container">
                <Routes>
                    <Route path="/" element={<Page1/>} />
                    <Route path="/page2" element={<Page2/>} />

                    {/* <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroeId" element={<HeroScreen />} />

                    <Route path="/" element={<MarvelScreen />} /> */}

                </Routes>
            </div>
        </>
    )
}