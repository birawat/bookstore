import React from 'react'
import file from '../../Image/file.png';

export default function About() {
  return (
    <div className="row site-wrapper container  otherpage">
      <div className="col-12 text-center">
        <h1 className="abouttitle">About The BooksMania</h1>
        <div className="noticeboard">         
          <div className="noticeboardbody">
            <p className="text-center font-weight-bold">
              <span className="themecolor">BooksMania</span>
              is India’s Largest and Cheapest Online Bookstore offering
              <span className="themecolor">40+ Million</span> selections.
            </p>
            <p className="text-center m-0">
              “I declare after all there is no enjoyment like reading!”<br />
              <span className="themecolor">- 
              <em>Jane Austen, Pride and Prejudice.</em>
              </span>
            </p>
          </div>
        </div>
      </div>
      <img src={file} className="mt-4" style={{ height: "380px" }} />
      <div className="col-md-12 bg-white mt-5 artical-main mt-2 mb-5 pt-3">
          <p>Dear readers,</p>
          <p>
            We offer huge collection of books in diverse category of Fiction, Non-fiction, Biographies, History, Religions, Self -Help, Children. We also sell in vast collection of Investments and Management, Computers, Engineering, Medical, College and School text references books proposed by different institutes as syllabus across the country.  Besides to this, we also offer a large collection of E-Books at very fair pricing.
          </p>
          <p>We attempt to extend the customer satisfaction by catering easy user-friendly search engine, quick and user-friendly payment options and quicker delivery systems. Upside to all of this, we are disposed to provide exciting offers and pleasant discounts on our books. </p>
          <p>As well, we humbly invite all the sellers around the country to partner with us. We will surely provide you the platform for many sparkling domains and grow the “BooksMania” family.We would like to thank you for shopping with us. You can write us for any new thoughts at “email-id” helping us to improvise for the reader satisfaction.</p>
      </div>
    </div>
  )
}
