# BidSphere

<p align="center">
    <img src="https://deploy-badge.vercel.app/vercel/bidsphere-frontend" alt="Vercel Deploy"></img>
</p>

Bidsphere aims to simplify the tender bidding process, offering a comprehensive platform for both issuers and bidders. It provides a transparent, efficient, and user-friendly environment where issuers can create and manage tenders, while bidders can easily place and manage their bids.

---

## Live Deployment
BidSphere is deployed and accessible at the following URL:

- Live Application: https://bidsphere-frontend.vercel.app
- (backend): https://bidsphere-backend.vercel.app

---

## Repo:
- Github: https://github.com/KaziNizamul/BidSphere
- GitLab: https://git.cs.dal.ca/nkazi/csci_5709_b00961418/-/tree/main/Assignments/Assignment3

---

## Demo Link:

https://github.com/user-attachments/assets/dbe051e8-b4b9-4c07-9724-a338aab7dee2

---

**Assignment 3 link :** https://git.cs.dal.ca/nkazi/csci_5709_b00961418/-/tree/main/Assignments/Assignment3

---

## Features
- **Auth**: Secure user login and signup functionality.
- **Bidder Dashboard**: Displays all tenders with filtering options, including details of individual tenders.
- **Tender Issuer Dashboard**: Lists all tenders posted by issuers with filtering criteria, tender statistics, and current bidding details.
- **Tender Creation & Management**: Issuers can create, edit, update, delete tenders, and upload related documents.
- **Issuer Analysis Dashboard**: Analysis graphs for tender performance such as tenders closed by month/year, average awarded costs, etc.
- **✅Q&A Page/Help Desk**: Bidders can create questions/tickets, others can comment, and issuer comments are highlighted.
- **Bidding Management**: Redirects users to a bidding page with pre-filled details, additional details submission, CRUD functionality, and bid status viewing.
- **Issuer’s Contract Management**: Issuers can view bidder details, award contracts, and send payment requests.
- **✅Payment Gateway**: Handles payment requests, notifies bidders, and updates bid status.
- **User Profile**: Modify username, add profile picture, and reset password.
- **User Verification Module**: Allows user verification by admin, document upload, and approval/rejection functionality.
- **Document Management**: Upload, store, and manage documents related to tenders, bids, and contracts.

---

## Features developed by me
### 1. Payment using stripe
**Backend file Path:** https://git.cs.dal.ca/nkazi/csci_5709_b00961418/-/blob/main/Assignments/Assignment3/server/node/src/controller/payment.js

**Frontend file Path:** https://git.cs.dal.ca/nkazi/csci_5709_b00961418/-/blob/main/Assignments/Assignment3/frontend/src/components/molecules/PaymentStatus/index.jsx

**Tasks included**
- Status Updates: Once payment is completed, dashboards reflect the status.

--- 

### 2. Q&A Page/Help Desk
**Backend file paths:** 
- https://git.cs.dal.ca/nkazi/csci_5709_b00961418/-/blob/main/Assignments/Assignment3/server/node/src/controller/Q&A/Questionaire.controller.js

- https://git.cs.dal.ca/nkazi/csci_5709_b00961418/-/blob/main/Assignments/Assignment3/server/node/src/controller/Q&A/NestedComment.controller.js

**Frontend file paths:** 
- https://git.cs.dal.ca/nkazi/csci_5709_b00961418/-/blob/main/Assignments/Assignment3/frontend/src/components/organisms/Q&A/Questionaire/index.jsx

- https://git.cs.dal.ca/nkazi/csci_5709_b00961418/-/blob/main/Assignments/Assignment3/frontend/src/components/organisms/Q&A/NestedComment/index.jsx

**Tasks included**
- Question and Ticket Creation: Bidders can post questions or tickets about tenders.
- Commenting System: Users can comment on questions.

---

## Getting Started

### Prerequisites

- Node.js (version 12.x or higher)
- npm (version 6.x or higher) or Yarn (version 1.22.x or higher)
- MongoDB (version 4.x or higher)

### Installation

### Setup Instructions

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Navigate to the server directory:

```bash
cd server/node
```

5. Install dependencies:

```bash
npm install
```

6. Start the server:

```bash
npm start
```

The application should now be running on `http://localhost:5173`.

--- 

## Usage

After installation, you can use BidSphere to:

- **For Bidders**: To Bid and get the contract.
- **For Issuers**: To create the contract and let bidders bid for it.

---
## Folder Structure

```
├── Readme.md
├── frontend
│   ├── dist
│   ├── index.html
│   ├── jsconfig.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── atoms
│   │   │   │   ├── accordian
│   │   │   │   ├── button
│   │   │   │   ├── input
│   │   │   │   └── textarea
│   │   │   ├── molecules
│   │   │   │   ├── BreadCrumb
│   │   │   │   ├── ContactForm
│   │   │   │   ├── Drawer
│   │   │   │   ├── LandingPage
│   │   │   │   ├── Modal
│   │   │   │   ├── PaymentStatus
│   │   │   │   │   ├── PaymentStatus.module.scss
│   │   │   │   │   └── index.jsx
│   │   │   │   ├── RedirectToQnA
│   │   │   │   │   ├── RedirectToQnA.module.scss
│   │   │   │   │   └── index.jsx
│   │   │   │   ├── Table
│   │   │   │   └── TenderForm
│   │   │   ├── organisms
│   │   │   │   ├── ContactFormContainer
│   │   │   │   ├── FaqGroup
│   │   │   │   ├── LandingPage
│   │   │   │   └── Q&A
│   │   │   │       ├── NestedComment
│   │   │   │       │   ├── NestedComment.module.scss
│   │   │   │       │   ├── data
│   │   │   │       │   │   └── NestedComment.reducer.js
│   │   │   │       │   ├── index.jsx
│   │   │   │       │   ├── sections
│   │   │   │       │   │   ├── comment
│   │   │   │       │   │   │   ├── comment.service.js
│   │   │   │       │   │   │   ├── index.jsx
│   │   │   │       │   │   │   ├── replies
│   │   │   │       │   │   │   │   └── index.jsx
│   │   │   │       │   │   │   └── slice
│   │   │   │       │   │   │       └── commentsSlice.js
│   │   │   │       │   │   └── question
│   │   │   │       │   │       ├── index.jsx
│   │   │   │       │   │       ├── question.module.scss
│   │   │   │       │   │       └── slice
│   │   │   │       │   │           └── questionsSlice.js
│   │   │   │       │   ├── service
│   │   │   │       │   │   └── NestedComment.service.js
│   │   │   │       │   └── utils
│   │   │   │       │       └── index.js
│   │   │   │       ├── Questionaire
│   │   │   │       │   ├── Questionaire.module.scss
│   │   │   │       │   ├── data
│   │   │   │       │   │   ├── Questionaire.reducer.js
│   │   │   │       │   │   └── questionaire.slice.js
│   │   │   │       │   ├── index.jsx
│   │   │   │       │   ├── sections
│   │   │   │       │   │   └── ModalWrapper
│   │   │   │       │   │       ├── index.jsx
│   │   │   │       │   │       ├── index.module.scss
│   │   │   │       │   │       └── slice
│   │   │   │       │   │           └── modalSlice.js
│   │   │   │       │   └── service
│   │   │   │       │       └── Questionaire.service.js
│   │   │   │       └── reducer
│   │   │   │           └── Q&A.reducer.js
│   │   │   ├── pages
│   │   │   │   ├── Contact
│   │   │   │   ├── Faq
│   │   │   │   ├── HomePage
│   │   │   │   ├── Pricing
│   │   │   │   │   └── index.jsx
│   │   │   │   └── TenderIssuer
│   │   │   ├── templates
│   │   │   │   ├── Contact
│   │   │   │   └── Faq
│   │   │   └── utils
│   │   ├── core
│   │   │   ├── App.jsx
│   │   │   ├── configs
│   │   │   │   └── ErrorBoundary.jsx
│   │   │   ├── index.css
│   │   │   ├── index.jsx
│   │   │   └── routes
│   │   │       └── route.jsx
│   │   ├── data
│   │   │   └── store.js
│   │   ├── services
│   │   │   ├── http.js
│   │   │   └── urls.js
│   │   └── shared
│   │       ├── assets
│   │       ├── components
│   │       ├── constants
│   │       ├── hoc
│   │       └── hooks
│   ├── tailwind.config.js
│   └── vite.config.js
└── server
    ├── node
    │   ├── dist
    │   ├── index.js
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── src
    │   │   ├── controller
    │   │   │   ├── Q&A
    │   │   │   │   ├── NestedComment.controller.js
    │   │   │   │   └── Questionaire.controller.js
    │   │   │   └── payment.js
    │   │   ├── middleware
    │   │   │   └── corsMiddleware.js
    │   │   ├── model
    │   │   │   └── Q&A
    │   │   │       ├── NestedComment.model.js
    │   │   │       └── Questionaire.model.js
    │   │   └── routes
    │   │       ├── Q&A
    │   │       │   ├── NestedComment.route.js
    │   │       │   ├── Questionaire.route.js
    │   │       │   └── index.js
    │   │       └── payment.js
    │   └── vercel.json
    └── springboot

```

---
## Sources used:

**1. file path** : https://git.cs.dal.ca/nkazi/csci_5709_b00961418/-/blob/main/Assignments/Assignment3/server/node/src/controller/payment.js

```JS
require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY)

exports.initPayment = async(req, res) => {
  const { product } = req.body;

  const lineItems = product.map((products) => {
    return {
      price_data: {
        currency: "cad",
        product_data: {
          name: products.title
        },
        unit_amount: products.amount * 100,
      },
      quantity: 1
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.FRONTEND_URL}/payment-success`,
    cancel_url: `${process.env.FRONTEND_URL}/payment-failure`,
  }) 

  res.json({ session })
}
```

The above code was modified by using the code from below link
https://docs.stripe.com/payments

**2. file path:**
https://git.cs.dal.ca/nkazi/csci_5709_b00961418/-/blob/main/Assignments/Assignment3/frontend/src/components/organisms/Q&A/Questionaire/index.jsx

```JSX
/* external imports */
import React, { useEffect } from 'react';
import { message } from 'antd';
import cx from 'classnames';
import moment from 'moment';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
/* internal components */
import Button from '@atoms/button';
import withNavbar from '@shared/hoc/withNavBar';
import ModalWrapper from './sections/ModalWrapper';
import { setquestionData } from './data/questionaire.slice';
import { setModalVisible } from './sections/ModalWrapper/slice/modalSlice';
/* styles */
import styles from './Questionaire.module.scss';
/* services */
import { getAllQuestions } from './service/Questionaire.service';

const Questions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const questionData = useSelector(
    state => state.QuesnAndAnswerReducer.QuestionaireReducer.QuestionaireReducer.questionData,
  );
  const isModalVisible = useSelector(
    state => state.QuesnAndAnswerReducer.QuestionaireReducer.ModelWrappereReducer.isModalVisible,
  );

  useEffect(() => {
    fetchQuestionData();
  }, []);

  const fetchQuestionData = () => {
    getAllQuestions()
      .then(({ data }) => {
        dispatch(setquestionData(data));
      })
      .catch((err) => {
        message.error(err);
      });
  };

  const handleButtonClick = () => {
    dispatch(setModalVisible(true));
  };

  const handleQuestionClick = (questionId) => {
    navigate(`${location.pathname}/${questionId}`);
  };

  return (
    <>
      <div className={styles.questions}>
        <div className={styles.topQuestions}>
          <div>Q <sub style={{ bottom: 'unset' }}>&</sub> A</div>
          <Button
            title="Ask a Question"
            className={styles.askButton}
            onClick={handleButtonClick}
          >Ask a Question
          </Button>
        </div>
        <div className={styles.questionList}>
          {(questionData || []).map((question) => {
            const {
              _id: qId = '',
              qTitle = '',
              qDesc = '',
              timeStamp = 0,
              askedByUsername = '',
              totalAnswers = 0,
            } = question || {};

            return (
              <div
                key={qId}
                role="button"
                tabIndex={0}
                className={styles.questionContainer}
                onClick={() => handleQuestionClick(qId)}
              >
                <div className={styles.authorSection}>
                  <FaUser className={styles.icon} />
                  <span className={styles.authorName}>{askedByUsername}</span>
                  <span className={styles.created}>asked {moment(timeStamp).fromNow()}</span>
                  <span
                    className={cx(styles.totalAnswers, {
                      [styles.noAnswers]: totalAnswers === 0,
                      [styles.hasAnswers]: totalAnswers > 0,
                    })}
                  >
                    {totalAnswers} Answers
                  </span>
                </div>
                <div className={styles.questionContent}>
                  <div className={styles.questionTitle}>{qTitle}</div>
                  <div className={styles.questionDescription}>{qDesc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isModalVisible && (
        <ModalWrapper title="Ask a Question" onSubmit={fetchQuestionData} />
      )}
    </>
  );
};

export default withNavbar(Questions);
```

--- 

## W3C Compliant
BidSphere is W3C compliant and support cross browser rendering.

---

## Code Quality
All files are checked and developed using AirBnB code guide style, enforced by eslint.

---

## Acknowledgments

- Special thanks to all contributors who have helped to build BidSphere.
- Icons and visuals are credited to [FontAwesome](https://fontawesome.com/), [Ant Design Icons](https://ant.design/components/icon/), and other libraries used in the project.

---

## Project Status

BidSphere is actively being developed and maintained. We aim to add more features and improve user experience continuously.

