import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.BPuz8OAt5xk8chRCL8PS_QHaHa?cb=12&w=810&h=810&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/022/424/488/small_2x/microsoft-editorial-logo-free-vector.jpg",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/amazon/amazon_PNG5.png",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 35,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/024/806/527/large_2x/infosys-logo-transparent-free-png.png",
    companyName: "Infosys",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 40,
    location: "Pune, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.5eLzr7Y1v8iY6Rq_7G1UjQHaH9?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "TCS",
    datePosted: "1 week ago",
    post: "System Administrator",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 30,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta",
    datePosted: "10 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 50,
    location: "Delhi, India"
  },
  {
    brandLogo: "https://www.pngall.com/wp-content/uploads/13/IBM-Logo-PNG-Pic.png",
    companyName: "IBM",
    datePosted: "4 days ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/n_up_flex_logo_accenture-1.webp?w=1000",
    companyName: "Accenture",
    datePosted: "8 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Pune, India"
  },
  {
    brandLogo: "https://img.kompass.com/sys-master-images/hc2/hbd/9855995281438/zoho-logo-jpg",
    companyName: "Zoho",
    datePosted: "6 days ago",
    post: "Mobile App Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 25,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://www.financialexpress.com/wp-content/uploads/2017/05/wipro.jpg",
    companyName: "Wipro",
    datePosted: "2 weeks ago",
    post: "QA Tester",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 35,
    location: "Noida, India"
  }
];


  return (
    <div className='parent'>

      {jobOpenings.map((job, index) => (
        <div key={index}>
          <Card job={job} />
        </div>
      ))}


    </div>
  )
}

export default App
