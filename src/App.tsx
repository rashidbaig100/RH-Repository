/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModals } from './components/LegalModals';

// Page Views
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { FinancialServicesPage } from './pages/FinancialServicesPage';
import { MedicalBillingPage } from './pages/MedicalBillingPage';
import { USATaxPage } from './pages/USATaxPage';
import { ConsultingPage } from './pages/ConsultingPage';
import { MarketingPage } from './pages/MarketingPage';
import { OperationalEfficiencyPage } from './pages/OperationalEfficiencyPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'disclaimer' | 'privacy' | 'terms' | null>(null);

  // Sync page title with current page
  useEffect(() => {
    const titles: Record<PageId, string> = {
      'home': 'RH Business Solutions – Global Financial, Healthcare Billing & Tax Solutions',
      'about': 'About Us – RH Business Solutions | International B2B Consulting',
      'services': 'Core Services Overview – RH Business Solutions',
      'financial-services': 'Global Financial Services & FP&A – RH Business Solutions',
      'medical-billing': 'USA & Canada Medical Billing Services – RH Business Solutions',
      'usa-tax': 'USA Tax Support & Compliance – RH Business Solutions',
      'consulting': 'Business Consulting & Performance – RH Business Solutions',
      'marketing': 'B2B Marketing & Client Acquisition – RH Business Solutions',
      'operational-efficiency': 'Operational Efficiency & SOPs – RH Business Solutions',
      'industries': 'Industries We Serve – RH Business Solutions',
      'why-us': 'Why RH Business Solutions – Trust & Standards',
      'insights': 'Insights & Thought Leadership – RH Business Solutions',
      'contact': 'Contact Us & Book Consultation – RH Business Solutions'
    };

    if (titles[currentPage]) {
      document.title = titles[currentPage];
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleOpenConsultation = (service?: string) => {
    setPreselectedService(service);
    setConsultationModalOpen(true);
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-900 selection:text-white">
      {/* Universal Top Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Executive About Inquiry')}
          />
        )}

        {currentPage === 'services' && (
          <ServicesOverviewPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'financial-services' && (
          <FinancialServicesPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'medical-billing' && (
          <MedicalBillingPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'usa-tax' && (
          <USATaxPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'consulting' && (
          <ConsultingPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'marketing' && (
          <MarketingPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'operational-efficiency' && (
          <OperationalEfficiencyPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'why-us' && (
          <WhyUsPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Why Us Inquiry')}
          />
        )}

        {currentPage === 'insights' && (
          <InsightsPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            preselectedService={preselectedService}
          />
        )}
      </main>

      {/* Universal Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        preselectedService={preselectedService}
      />

      {/* Legal & Regulatory Disclaimers Modal */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
