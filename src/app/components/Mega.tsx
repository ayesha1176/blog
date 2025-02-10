import React from 'react'
import BlogCard from '../components/blogCard'


export default function Mega () {
  const posts = [{
    id: '1',
    title: 'Conquering the Metaverse',
    description: 'Explore and build immersive virtual worlds shaping the future of digital interaction',
    date: '2024-1-12',
    image: "/pic1.png",

  },

  {
    id: '2',
    title: ' Unlocking the Power of AI and Machine Learning',
    description: 'Master AI and Machine Learning to create smart solutions and drive innovation. ',
    date: '2024-1-11',
    image: '/pic2.png',

  },
  
  {
    id: '3',
    title: 'Harnessing the Power of Technology',
    description: ' Learn to leverage technology to innovate, adapt, and transform the digital world',
    date: '2024-11-11',
    image: '/pic3.png',

  },
  
  {
    id: '4',
    title: ' Redefining Work in the Metaverse',
    description: 'Discover how the Metaverse is transforming collaboration, productivity, and the future of work',
    date: '2024-1-8',
    image: '/pic4.png',

  },
  {
    id: '5',
    title: ' Deep Learning Demystified',
    description: 'Unlock the potential of neural networks to power intelligent and adaptive systems',
    date: '2025-1-11',
    image: '/pic5.png',

  },
  {
    id: '6',
    title: 'Ethics in Artificial Intelligence',
    description: '"Ensuring fairness, accountability, and transparency in AI-driven systems ',
    date: '2025-1-3',
    image: '/pic6.png',

  },
  {
    id: '7',
    title: ' Understanding the Machine Learning Pipeline',
    description: 'Streamline the process of building, training, and deploying machine learning models efficiently ',
    date: '2025-1-8',
    image: '/pic7.png',

  },
  {
    id: '8',
    title: ' Progressive Web Apps: The Future of Web Development',
    description: 'Combining the best of web and mobile apps for fast, reliable, and engaging user experiences ',
    date: '2025-1-1',
    image: '/pic8.png',

  },
  {
    id: '9',
    title: ' Creating in the Metaverse',
    description: '"Create immersive virtual environments and experiences that define the future of digital interaction.',
    date: '2025-1-13',
    image: '/pic9.png',

  },
  {
    id: '10',
    title: 'The Rise of Virtual Economy in the Metaverse',
    description: 'Explore how digital assets, currencies, and trade are transforming in virtual spaces',
    date: '2024-11-13',
    image: '/pic10.png',

  },
  {
    id: '11',
    title: 'deep dive in Real-World Applications of Technology',
    description: 'Leveraging innovative technology to solve everyday challenges and enhance industries ',
    date: '2025-1-4',
    image: '/pic11.png',

  },
  {
    id: '12',
    title: ' AI Revolution in Finance',
    description: ' Transforming financial decision-making, risk management, and fraud detection with AI-driven solutions',
    date: '2024-10-11',
    image: '/pic12.png',

  },
  
  

];
  return (
    <div className='my-8'>
     <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>Exploring the world of AI and Technology</h1>
     <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {posts.map((post , index )=>(
        <div className='fade-in' key={post.id}>
          <div className='blog-card'>
            <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
          </div>
        </div>
      ))}

     </div>
     </div>
  
  )
}
