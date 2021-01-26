import bcrypt from 'bcryptjs';

const data = {
  users:[
    {
    name:'Brijesh',
    phone: 6477074531,
    email:'brijeshpanchal127@gmail.com',
    password: bcrypt.hashSync('1234',8),
    isAdmin: true,
  },
  {
    name:'Akshay',
    phone: 6477074533,
    email:'akshaypanchal127@gmail.com',
    password: bcrypt.hashSync('5678',8),
    isAdmin: false,
  },
  {
    name:'Harsh',
    phone: 6477074532,
    email:'harshtiwar127@gmail.com',
    password: bcrypt.hashSync('8765',8),
    isAdmin: false,
  },
],
    movies: [
      {
      
        name: 'Munnabhai M.B.B.S',
        category: 'comedy',
        image: '/images/1.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2003',
        imdbstar: 8.1,
        stars: 'Sanjay Dutt, Arshad Warsi, Gracy Singh, Sunil Dutt',
        description: 'A gangster sets out to fulfill his fathers dream of becoming a doctor.'
      },
      {
      
        name: 'Hera Pheri',
        category: 'comedy',
        image: '/images/2.jpg',
        TicketPrice: 100,
        seats: 100,
        released_year: '2000',
        imdbstar: 8.2,
        stars: 'Akshay Kumar, Sunil Shetty, Paresh Rawal, Tabu',
        description: 'Three unemployed men look for answers to all their money problems - but when their opportunity arrives, will they know what to do with it?'
      },
      {
      
        name: 'Andaz Apna Apna ',
        category: 'comedy',
        image: '/images/3.jpg',
        TicketPrice: 150,
        seats: 100,
        released_year: '1994',
        imdbstar: 8.2,
        stars: 'Aamir Khan, Salman Khan, Raveena Tandon, Karisma Kapoor',
        description: 'Two slackers competing for the affections of an heiress inadvertently become her protectors from an evil criminal.'
      },
      {
      
        name: '3 Idiots ',
        category: 'comedy',
        image: '/images/4.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2009',
        imdbstar: 8.4,
        stars: 'Aamir Khan, Madhavan, Mona Singh, Sharman Joshi',
        description: 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them "idiots".'
      },
      {
      
        name: 'Phir Hera Pheri ',
        category: 'comedy',
        image: '/images/5.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2006',
        imdbstar: 6.9,
        stars: ' Akshay Kumar, Sunil Shetty, Paresh Rawal, Bipasha Basu',
        description: 'Baburao, Raju and Shyam are living happily after having risen from rags to riches. Still, money brings the joy of riches and with it the greed to make more money. And so, with a don as an unknowing investor, Raju initiates a new game.'
      },
      {
      
        name: 'Dhamaal',
        category: 'comedy',
        image: '/images/6.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2007',
        imdbstar: 7.3,
        stars: 'Sanjay Dutt, Riteish Deshmukh, Arshad Warsi, Javed Jaffrey',
        description: 'Four lazy slacker conmen buddies who are jobless, homeless and broke learn about the secret of a hidden treasure from a dying thief and later embark on a race against time to find the mobsters buried treasure and claim it while being pursued by a determined police inspector who is hellbent to get the treasure all by himself.'
      },
      {
      
        name: 'OMG: Oh My God!',
        category: 'comedy',
        image: '/images/7.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2012',
        imdbstar: 8.1,
        stars: 'Paresh Rawal, Akshay Kumar, Mithun Chakraborty, Mahesh Manjrekar',
        description: 'A shopkeeper takes God to court when his shop is destroyed by an earthquake.'
      },
      {
      
        name: 'Lage Raho Munna Bhai',
        category: 'comedy',
        image: '/images/8.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2006',
        imdbstar: 8.0,
        stars: 'Sanjay Dutt, Arshad Warsi, Vidya Balan, Boman Irani',
        description: 'A gangster sets out to fulfill his fathers dream of becoming a doctor.'
      },
      {
      
        name: 'Holiday: A Soldier is Never Off Duty',
        category: 'action',
        image: '/images/9.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2014',
        imdbstar: 7.2,
        stars: 'Akshay Kumar, Sonakshi Sinha, Freddy Daruwala, Sumeet Raghvan',
        description: 'A military officer uses his intellect and fighting skills to hunt and knock down a terrorist aiming to rip apart Mumbai via the sleeper cells under his command.'
      },
      {
        
        name: 'Baby ',
        category: 'action',
        image: '/images/10.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2015',
        imdbstar: 8.0,
        stars: 'Akshay Kumar, Danny Denzongpa, Rana Daggubati, Taapsee Pannu',
        description: 'An elite counter-intelligence unit learns of a plot, masterminded by a maniacal madman. With the clock ticking, its up to them to track the terrorists international tentacles and prevent them from striking at the heart of India.'
      },
      {
        
        name: 'Force',
        category: 'action',
        image: '/images/11.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2011',
        imdbstar: 6.4,
        stars: 'John Abraham, Genelia DSouza, Vidyut Jammwal, Raj Babbar',
        description: 'A vengeful gangster targets and terrorizes an entire police unit and their families.'
      },
      {
        
        name: 'Dhoom',
        category: 'action',
        image: '/images/12.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2004',
        imdbstar: 6.7,
        stars: 'Abhishek Bachchan, John Abraham, Uday Chopra, Esha Deol',
        description: 'A mysterious gang of bikers is on a robbing spree. ACP Jai gets Ali, a mechanic, to assist him in the case. With the clock ticking, its up to them to nab the thieves red-handed.'
      },
      {
        
        name: 'Race-1',
        category: 'action',
        image: '/images/13.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2008',
        imdbstar: 6.7,
        stars: 'Saif Ali Khan, Akshaye Khanna, Bipasha Basu, Katrina Kaif',
        description: 'Destiny makes two brothers- Ranvir and Rajiv - enemies of each other. Everything is fair in love and war.'
      },
      {
        
        name: 'Race 2',
        category: 'action',
        image: '/images/14.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2013',
        imdbstar: 5.3,
        stars: ' Saif Ali Khan, Anil Kapoor, John Abraham, Deepika Padukone',
        description: 'Ranvir treads through the world of the Indian mafia in Turkey as he looks to avenge the death of his lover and partner in crime.'
      },
      {
        
        name: 'Dhoom 3',
        category: 'action',
        image: '/images/15.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2013',
        imdbstar: 5.4,
        stars: 'Aamir Khan, Katrina Kaif, Abhishek Bachchan, Uday Chopra',
        description: 'When Sahir, a circus entertainer trained in magic and acrobatics, turns into a thief to take down a corrupt bank in Chicago that ruined his father, Indian officers Jai and Ali are called to catch him.'
      },
      {
        
        name: 'Raees ',
        category: 'action',
        image: '/images/16.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2017',
        imdbstar: 6.8,
        stars: 'Shahrukh Khan, Raj Arjun, Shubham Chintamani, Shubham Tukaram, Yug',
        description: 'A bootlegger sets out to improve his community as a promising leader but falls in a political trap.'
      },
      {
        
        name: 'Mohabbatein',
        category: 'romantic',
        image: '/images/17.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2000',
        imdbstar: 7.1,
        stars: 'Akshay Kumar, Shilpa Shetty Kundra, Sunil Shetty, Mahima Chaudhry',
        description: 'A film about the battle between love and fear, between two stubborn men and their opposing beliefs and the outcome of the love stories of 3 couples'
      },
      {
        
        name: 'Dhadkan',
        category: 'romantic',
        image: '/images/18.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2000',
        imdbstar: 6.5,
        stars: 'Amitabh Bachchan, Shah Rukh Khan, Uday Chopra, Jugal Hansraj',
        description: 'In the end, when Anjali tells Dev she is pregnant with Rams child and begs him to leave her alone, Dev realizes his folly and decides to marry his current friend and business partner Sheetal Varma (Mahima Chaudhary) who is his new companion and secretly loved him for a long time.'
      },
      {
        
        name: 'Kaho Naa Pyaar Hai ',
        category: 'romantic',
        image: '/images/19.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2000',
        imdbstar: 6.9,
        stars: 'Hrithik Roshan, Ameesha Patel, Anupam Kher, Dalip Tahil',
        description: 'A young girl meets the doppelganger of her deceased boyfriend and now has a chance to find the people who have murdered him.'
      },
      {
        
        name: ' Kabhi Khushi Kabhie Gham',
        category: 'romantic',
        image: '/images/20.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2001',
        imdbstar: 7.4,
        stars: ' Shah Rukh Khan, Kajol, Amitabh Bachchan, Hrithik Roshan',
        description: 'After marrying a poor woman, rich Rahul is disowned by his father and moves to London to build a new life. Years later, his now grown up little brother Rohan embarks on a mission to bring Rahul back home and reunite the family again.'
      },
      {
        
        name: 'Gadar: Ek Prem Katha',
        category: 'romantic',
        image: '/images/21.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2001',
        imdbstar: 7.1,
        stars: ' Sunny Deol, Ameesha Patel, Amrish Puri, Lillete Dubey',
        description: 'Set during the Partition of India in 1947, a Sikh truck driver falls in love with a Muslim girl belonging to an aristocratic family.'
      },
      {
        
        name: 'Tere Naam',
        category: 'romantic',
        image: '/images/22.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2003',
        imdbstar: 7.1,
        stars: 'Salman Khan, Bhoomika Chawla, Sachin Khedekar, Savita Prabhune',
        description: 'Problems arise when Radhey Mohan, a delinquent falls in love with a girl named Nirjara.'
      },
      {
        
        name: 'Ishq Vishk ',
        category: 'romantic',
        image: '/images/23.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2003',
        imdbstar: 7.1,
        stars: ' Shahid Kapoor, Amrita Rao, Shenaz Treasury, Vishal Malhotra',
        description: 'A collegian (Shahid Kapoor) woos a beautiful girl, then falls in love with his childhood friend (Amrita Rao).'
      },
      {
        
        name: 'Veer-Zaara',
        category: 'romantic',
        image: '/images/24.jpg',
        TicketPrice: 120,
        seats: 100,
        released_year: '2004',
        imdbstar: 7.8,
        stars: ' Shah Rukh Khan, Preity Zinta, Rani Mukerji, Kirron Kher',
        description: 'Veer-Zaara is a saga of love, separation, courage and sacrifice. A love story that is an inspiration and will remain a legend forever'
      },
      
    ],
  };
  export default data;