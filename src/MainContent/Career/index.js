import React from 'react'
import Career from '../../carrerimage.jpeg'
import CarreImg from '../../career-pic1.jpg'

export default function Carrer() {
  return (
    <div>
      <div>
        <img src={Career} className=" mx-auto d-block w-100" alt='' />
      </div>

      <div className='mt-3 text-center text-primary'>
        <h1>Careers</h1>
        <h2>Why join BooksMania?</h2>
      </div>
      <div>
        <img src={CarreImg} className=" mx-auto d-block w-100" alt='' />
      </div>
      <div style={{width:"80%", marginLeft:"10%"}}>
        <p className="text-left fs-6 mt-4">booksmania is one of the most popular online book shops from where readers can buy any book at an affordable price. Apart from reading books, various kinds of books like academics are also sold here.</p>
        <p className="text-left fs-6 mt-4">booksmania is a Delhi-based company under which more than 100 employees work. Various categories of roles are open here for which candidates can apply. booksmania also provides internships based on qualifications.</p>
        <p className="text-left fs-6 mt-4">Here at booksmania, every worker is treated as a contributor who contributes to the successful growth and development of the company. We look forward to welcoming new determinant talents who aim to excel in life and give purpose to their deeds in our expanding family of booksmania.</p>
      </div>
      <div className='row g-2 w-75 mt-4' style={{marginLeft:"13%", textAlign:"center"}}>
        <div className='col-md border'>
          <div>
            <h5>Personal and professional growth</h5>
            <p>Bookswagon is a company run by a group of people who are passionate about their work. Every member is bestowed with a responsibility that is expected to be done with punctuality and efficiency and above all honesty. At the prime core, Bookswagon hopes to mould its employees into better human beings who are best at their jobs so that no matter which part of the country they are in or go to, they always represent themselves with strong personalities.</p>
          </div>
        </div>

        <div className='col-md border'>
          <div>
            <h5>Positive and happy workspace</h5>
            <p>It is believed at Bookswagon that a comfortable workspace is a key towards efficient functioning of any company. All the workers are ensured of a space that gives them encouragement and support for whatever work they do. Every employee is treated with equality and no kind of gender biasedness exists here as it is a place that crowns pure talent and hard work. Come and be a part of one of the biggest growing book websites where you can sharpen your skills and add that to the experience of professional work.</p>
          </div>
        </div>
      </div>
      <div className='border w-50 center mt-4' style={{marginLeft:"25%", textAlign:"center"}}>
        <h5>Discover the hidden potentials</h5>
        <p>Every working member of Bookswagon is challenged with situations that eventually help them to re-discover their working potentials and grow linearly in their stream of work. The challenges thrown are like that pressure that carves a diamond out of coal. And with time the members of Bookswagon have proved themselves to be the metaphor of diamonds. The innovative, strategic, and creative ideas of the members are recognized and applauded by all because Bookswagon believes that the growth of any company lies in the unity of the workers. If the workers are united to give their best then nothing can stop the company to climb the stairs of success.</p>
      </div>
    </div>
  )
}