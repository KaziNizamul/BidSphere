/* external imports */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

/* internal components */
import QuestionAndAnswer from '@organisms/Q&A/Questionaire';
import QnAPage from '@components/organisms/Q&A/NestedComment';
import App from '../App';
import Pricing from '../../components/pages/Pricing';
import PageNotFound from '../../shared/components/PageNotFound';
import PaymentStatus from '../../components/molecules/PaymentStatus';
import Faq from '../../components/pages/Faq';
import Contact from '../../components/pages/Contact';
// import PrivateRoute from './PrivateRoute';
// import Tenders from '../../components/pages/TenderIssuer/Tenders';
// import AddTender from '../../components/pages/TenderIssuer/AddTenders';
function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/home" element={<PrivateRoute />}> */}
      {/* <Route index element={<DashBoard />} /> */}
      {/* </Route> */}
      {/* <Route index element={<DashBoard />} /> */}
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/payment-success" element={<PaymentStatus status="success" />} />
      <Route path="/payment-failure" element={<PaymentStatus status="failure" />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/q&a" element={<QuestionAndAnswer />} />
      <Route path="/q&a/:qId" element={<QnAPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RouteConfig;
