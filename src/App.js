import React, { useState, useEffect } from 'react';
import { ChevronRight, Download, FileText, BookOpen, GraduationCap, Search, X, Filter } from 'lucide-react';

// Complete UCP Data Structure with correct abbreviations
const ucpData = {
  FOIT: {
    name: 'Faculty of Information Technology & Computer Science',
    fullName: 'FOIT',
    color: 'from-blue-500 to-blue-600',
    icon: '💻',
    programs: {
      'BS Computer Science': {
        subjects: ['Introduction to Computing (ITC)', 'Programming Fundamentals (PF)', 'Object Oriented Programming (OOP)', 'Data Structures & Algorithms (DSA)', 'Database Systems (DB)', 'Operating Systems (OS)', 'Software Engineering (SE)', 'Artificial Intelligence (AI)', 'Computer Networks (CCN)', 'Compiler Construction', 'Web Development (WAD)', 'Mobile App Development (MAD)', 'Theory of Automata (MAD)', 'Computer Organization & Assembly Language (COAL)']
      },
      'BS Software Engineering': {
        subjects: ['Introduction to Computing', 'Programming Fundamentals', 'Software Requirements Engineering', 'Software Design & Architecture', 'Software Testing', 'Software Quality Engineering', 'Agile Development', 'DevOps & Cloud Computing', 'Project Management', 'Human Computer Interaction', 'Design Patterns']
      },
      'BS Data Science': {
        subjects: ['Introduction to Data Science', 'Statistics', 'Machine Learning', 'Deep Learning', 'Data Mining', 'Big Data Analytics', 'Data Visualization', 'Business Intelligence', 'Python Programming', 'R Programming']
      },
      'BS Artificial Intelligence': {
        subjects: ['Introduction to AI', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Natural Language Processing', 'Robotics', 'Expert Systems', 'Neural Networks', 'Reinforcement Learning']
      },
      'BS Cyber Security': {
        subjects: ['Network Security', 'Cryptography', 'Ethical Hacking', 'Digital Forensics', 'Malware Analysis', 'Web Application Security', 'Cloud Security', 'Cyber Law', 'Penetration Testing']
      }
    }
  },
  FOMS: {
    name: 'Faculty of Management Sciences',
    fullName: 'FOMS',
    color: 'from-purple-500 to-purple-600',
    icon: '📊',
    programs: {
      'BBA': {
        subjects: ['Financial Accounting', 'Managerial Accounting', 'Principles of Management', 'Marketing Management', 'Human Resource Management', 'Operations Management', 'Strategic Management', 'Entrepreneurship', 'Business Statistics', 'Corporate Finance', 'Organizational Behavior']
      },
      'BS Accounting & Finance': {
        subjects: ['Financial Accounting', 'Cost Accounting', 'Auditing', 'Taxation', 'Corporate Finance', 'Investment Analysis', 'Financial Markets', 'Risk Management', 'Management Accounting', 'International Finance']
      },
      'BS Business Analytics': {
        subjects: ['Business Analytics', 'Data Visualization', 'Predictive Analytics', 'Marketing Analytics', 'Financial Analytics', 'Customer Analytics', 'Big Data', 'Statistical Methods', 'Data Mining']
      },
      'BS Digital Marketing': {
        subjects: ['Digital Marketing Fundamentals', 'Social Media Marketing', 'SEO & SEM', 'Content Marketing', 'Email Marketing', 'Web Analytics', 'E-Commerce', 'Mobile Marketing', 'Brand Management']
      },
      'BS FinTech': {
        subjects: ['Financial Technology', 'Blockchain', 'Cryptocurrency', 'Digital Banking', 'Payment Systems', 'Financial Programming', 'RegTech', 'InsurTech']
      }
    }
  },
  FMMC: {
    name: 'Faculty of Media & Mass Communication',
    fullName: 'FMMC',
    color: 'from-orange-500 to-orange-600',
    icon: '📺',
    programs: {
      'BS Media and Communication Studies': {
        subjects: ['Mass Communication Theory', 'Journalism', 'Public Relations', 'Advertising', 'Digital Media', 'Broadcasting', 'Media Ethics', 'Film Studies', 'Print Journalism', 'TV Production', 'Documentary Production']
      },
      'BS Film, TV & Digital Media': {
        subjects: ['Film History', 'Screenwriting', 'Cinematography', 'Editing', 'Directing', 'Documentary Filmmaking', 'Animation', 'Visual Effects', 'Sound Design', 'Production Management']
      }
    }
  },
  FOE: {
    name: 'Faculty of Engineering',
    fullName: 'FOE',
    color: 'from-indigo-500 to-indigo-600',
    icon: '⚙️',
    programs: {
      'B.Sc. Electrical Engineering': {
        subjects: ['Circuit Analysis', 'Electromagnetic Theory', 'Power Systems', 'Control Systems', 'Digital Electronics', 'Power Electronics', 'Electric Machines', 'Signals & Systems', 'Communication Systems', 'Renewable Energy']
      },
      'B.Sc. Mechanical Engineering': {
        subjects: ['Engineering Mechanics', 'Thermodynamics', 'Fluid Mechanics', 'Heat Transfer', 'Machine Design', 'Manufacturing Processes', 'CAD/CAM', 'Automotive Engineering', 'Mechanics of Materials']
      },
      'B.Sc. Civil Engineering': {
        subjects: ['Engineering Mechanics', 'Structural Analysis', 'Concrete Technology', 'Soil Mechanics', 'Transportation Engineering', 'Hydraulics', 'Construction Management', 'Surveying', 'Steel Structures']
      },
      'B.Sc. Computer Engineering': {
        subjects: ['Digital Logic Design', 'Computer Architecture', 'Embedded Systems', 'Microprocessors', 'VLSI Design', 'Computer Networks', 'Operating Systems', 'Software Engineering']
      },
      'BS Robotics & Intelligent Systems': {
        subjects: ['Robotics Fundamentals', 'Control Systems', 'Artificial Intelligence', 'Machine Vision', 'Robot Programming', 'Sensor Technology', 'Autonomous Systems']
      }
    }
  },
  
  FHASS: {
    name: 'Faculty of Humanities & Social Sciences',
    fullName: 'FHASS',
    color: 'from-green-500 to-green-600',
    icon: '🌍',
    programs: {
      'BS International Relations': {
        subjects: ['Introduction to IR', 'International Politics', 'Diplomatic History', 'Foreign Policy Analysis', 'International Law', 'Global Political Economy', 'Strategic Studies', 'South Asian Politics', 'Conflict Resolution']
      },
      'BS Psychology': {
        subjects: ['Introduction to Psychology', 'Developmental Psychology', 'Social Psychology', 'Cognitive Psychology', 'Clinical Psychology', 'Abnormal Psychology', 'Counseling Psychology', 'Research Methods', 'Psychotherapy']
      },
      'BS Economics': {
        subjects: ['Microeconomics', 'Macroeconomics', 'Econometrics', 'Development Economics', 'International Economics', 'Monetary Economics', 'Public Economics', 'Labor Economics', 'Economic Policy']
      },
      'BS Political Science': {
        subjects: ['Political Theory', 'Comparative Politics', 'Public Administration', 'Political Philosophy', 'Constitutional Law', 'Public Policy', 'Political Economy']
      }
    }
  },
  FLL: {
    name: 'Faculty of Languages & Literature',
    fullName: 'FLL',
    color: 'from-pink-500 to-pink-600',
    icon: '📚',
    programs: {
      'BS English Language and Literature': {
        subjects: ['British Literature', 'American Literature', 'Shakespeare Studies', 'Linguistics', 'Phonetics', 'Creative Writing', 'Literary Criticism', 'Modern Literature', 'Poetry Analysis', 'Drama Studies', 'Syntax & Semantics']
      }
    }
  },
  FOST: {
    name: 'Faculty of Science & Technology',
    fullName: 'FOST',
    color: 'from-teal-500 to-teal-600',
    icon: '🔬',
    programs: {
      'BS Biochemistry': {
        subjects: ['General Chemistry', 'Organic Chemistry', 'Biochemistry', 'Molecular Biology', 'Cell Biology', 'Microbiology', 'Enzymology', 'Immunology', 'Clinical Biochemistry', 'Bioinformatics']
      },
      'BS Biotechnology': {
        subjects: ['Cell Biology', 'Genetics', 'Molecular Biology', 'Genetic Engineering', 'Bioprocess Engineering', 'Plant Biotechnology', 'Medical Biotechnology', 'Bioinformatics', 'Industrial Biotechnology']
      },
      'BS Microbiology': {
        subjects: ['General Microbiology', 'Bacteriology', 'Virology', 'Mycology', 'Immunology', 'Medical Microbiology', 'Environmental Microbiology', 'Industrial Microbiology']
      },
      'BS Physics': {
        subjects: ['Classical Mechanics', 'Quantum Mechanics', 'Electromagnetism', 'Thermodynamics', 'Modern Physics', 'Nuclear Physics', 'Solid State Physics', 'Optics']
      },
      'BS Chemistry': {
        subjects: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Analytical Chemistry', 'Biochemistry', 'Polymer Chemistry', 'Environmental Chemistry']
      },
      'BS Mathematics': {
        subjects: ['Calculus', 'Linear Algebra', 'Differential Equations', 'Real Analysis', 'Complex Analysis', 'Numerical Analysis', 'Abstract Algebra', 'Topology']
      }
    }
  },
  
  FMCS: {
    name: 'Faculty of Pharmaceutical Sciences',
    fullName: 'FMCS',
    color: 'from-red-500 to-red-600',
    icon: '💊',
    programs: {
      'Pharm-D': {
        subjects: ['Pharmaceutical Chemistry', 'Pharmacology', 'Pharmaceutics', 'Medicinal Chemistry', 'Clinical Pharmacy', 'Pathology', 'Microbiology', 'Biochemistry', 'Pharmacognosy', 'Hospital Pharmacy', 'Drug Regulatory Affairs']
      }
    }
  },
  FOL: {
    name: 'Faculty of Law',
    fullName: 'FOL',
    color: 'from-yellow-500 to-yellow-600',
    icon: '⚖️',
    programs: {
      'LL.B (Hons.)': {
        subjects: ['Constitutional Law', 'Criminal Law', 'Contract Law', 'Property Law', 'Islamic Jurisprudence', 'International Law', 'Corporate Law', 'Family Law', 'Civil Procedure', 'Evidence Law', 'Administrative Law', 'Banking Law']
      }
    }
  }
};

// Mock past papers data
const mockPapers = {
  2024: [
    { id: 1, type: 'Midterm', semester: 'Fall', uploadDate: '2024-10-01' },
    { id: 2, type: 'Final', semester: 'Fall', uploadDate: '2024-12-20' }
  ],
  2023: [
    { id: 3, type: 'Midterm', semester: 'Spring', uploadDate: '2023-03-15' },
    { id: 4, type: 'Final', semester: 'Spring', uploadDate: '2023-05-28' },
    { id: 5, type: 'Midterm', semester: 'Fall', uploadDate: '2023-10-10' },
    { id: 6, type: 'Final', semester: 'Fall', uploadDate: '2023-12-18' }
  ],
  2022: [
    { id: 7, type: 'Midterm', semester: 'Spring', uploadDate: '2022-03-12' },
    { id: 8, type: 'Final', semester: 'Spring', uploadDate: '2022-05-25' },
    { id: 9, type: 'Midterm', semester: 'Fall', uploadDate: '2022-10-08' },
    { id: 10, type: 'Final', semester: 'Fall', uploadDate: '2022-12-15' }
  ],
  2021: [
    { id: 11, type: 'Midterm', semester: 'Spring', uploadDate: '2021-03-10' },
    { id: 12, type: 'Final', semester: 'Spring', uploadDate: '2021-05-20' }
  ]
};

function App() {
  const [screen, setScreen] = useState('splash');
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [subjectSearchQuery, setSubjectSearchQuery] = useState('');

  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    
    year: '',
    type: '',
    semester: ''
  });
  const handleDownload = (paper, subject) => {
    // We check if the subject name contains 'Operating Systems'
    if (subject && subject.includes('Operating Systems')) {
      window.open("http://localhost:5000/files/os-mid-2023.pdf", "_blank");
    } else {
      alert("This file is not yet uploaded to the server. Try Operating Systems for the demo!");
    }
  };

  useEffect(() => {
    if (screen === 'splash') {
      const timer = setTimeout(() => {
        setScreen('home');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  // Splash Screen
if (screen === 'splash') {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#001F3F]">
      <div className="text-center">
        {/* Paper Hub Animation Container */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          {/* The Main File/Hub Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <FileText className="w-20 h-20 text-white opacity-90" />
          </div>
          
          {/* Flying Paper 1 */}
          <div className="absolute top-0 left-0 animate-fly" style={{ animationDelay: '0s' }}>
            <FileText className="w-8 h-8 text-blue-200" />
          </div>
          
          {/* Flying Paper 2 */}
          <div className="absolute top-0 right-0 animate-fly" style={{ animationDelay: '0.5s' }}>
            <FileText className="w-8 h-8 text-blue-100" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-white tracking-wider animate-pulse">
          PaperHub
        </h1>
        <p className="text-white/80 mt-2 text-sm">Your Past Papers Hub</p>
        <p className="text-white/70 mt-1 text-xs">University of Central Punjab</p>
      </div>
    </div>
  );
}

  // Home Screen - Faculty Selection
if (screen === 'home') {
  const faculties = Object.keys(ucpData);
  const filteredFaculties = searchQuery
    ? faculties.filter(key =>
        ucpData[key].name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        key.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faculties;

  return (
    <div className="min-h-screen bg-[#001F3F]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] text-white p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <FileText className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">PaperHub</h1>
            <p className="text-white/80 text-xs">University of Central Punjab</p>
          </div>
        </div>

        <p className="text-white/90 text-sm mb-3 mt-2">
          Select Your Faculty
        </p>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search faculties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        {/* Stats */}
        <div className="flex gap-4 mt-4 text-center">
          <div className="flex-1 bg-white/10 rounded-lg p-2">
            <div className="text-2xl font-bold">{faculties.length}</div>
            <div className="text-xs text-white/80">Faculties</div>
          </div>
          <div className="flex-1 bg-white/10 rounded-lg p-2">
            <div className="text-2xl font-bold">
              {Object.values(ucpData).reduce(
                (acc, faculty) =>
                  acc + Object.keys(faculty.programs).length,
                0
              )}
            </div>
            <div className="text-xs text-white/80">Programs</div>
          </div>
          <div className="flex-1 bg-white/10 rounded-lg p-2">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-xs text-white/80">Papers</div>
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="p-4 mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredFaculties.length > 0 ? (
          filteredFaculties.map((facultyKey) => (
            <div
              key={facultyKey}
              onClick={() => {
                setSelectedFaculty(facultyKey);
                setScreen('programs');
              }}
              className={`bg-gradient-to-r ${ucpData[facultyKey].color} 
                text-white rounded-2xl p-4 shadow-lg cursor-pointer 
                transform transition-all hover:scale-105 active:scale-95`}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="bg-white/20 p-4 rounded-xl text-3xl">
                  {ucpData[facultyKey].icon}
                </div>

                <h2 className="text-lg font-bold leading-tight">
                  {facultyKey}
                </h2>

                <p className="text-white/90 text-xs">
                  {ucpData[facultyKey].name}
                </p>

                <p className="text-white/80 text-xs">
                  {Object.keys(ucpData[facultyKey].programs).length} Programs
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-white/70">
            <p>No faculties found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
}


  // Programs Screen
if (screen === 'programs') {
  const programs = Object.keys(ucpData[selectedFaculty].programs);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] text-white p-6 shadow-lg">
        <button 
          onClick={() => {
            setScreen('home');
            setSearchQuery('');
          }}
          className="text-white/90 text-sm mb-3 flex items-center gap-1 hover:text-white"
        >
          ← Back to Faculties
        </button>
        <div className="flex items-center gap-3">
          <div className="text-3xl">{ucpData[selectedFaculty].icon}</div>
          <div>
            <h1 className="text-2xl font-bold">{selectedFaculty}</h1>
            <p className="text-white/90 text-sm">{ucpData[selectedFaculty].name}</p>
          </div>
        </div>
      </div>

      {/* Programs List */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-700 mb-3">Programs ({programs.length})</h2>
        <div className="space-y-3">
          {programs.map((program) => (
            <div
              key={program}
              onClick={() => {
                setSelectedProgram(program);
                setScreen('subjects');
              }}
              className="bg-white rounded-xl p-5 shadow-md cursor-pointer transform transition-all hover:shadow-lg active:scale-98 border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{program}</h3>
                    <p className="text-gray-500 text-sm mt-0.5">
                      {ucpData[selectedFaculty].programs[program].subjects.length} Subjects
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  // Subjects Screen
if (screen === 'subjects') {
  const subjects =
    ucpData[selectedFaculty].programs[selectedProgram].subjects;

  const filteredSubjects = subjectSearchQuery
    ? subjects.filter((subject) =>
        subject.toLowerCase().includes(subjectSearchQuery.toLowerCase())
      )
    : subjects;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] text-white p-6 shadow-lg">
        <button
          onClick={() => setScreen('programs')}
          className="text-white/90 text-sm mb-3 flex items-center gap-1 hover:text-white"
        >
          ← Back to Programs
        </button>
        <h1 className="text-xl font-bold">{selectedProgram}</h1>
        <p className="text-white/90 text-sm">
          {ucpData[selectedFaculty].name}
        </p>

        {/* Search Bar */}
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search your subject"
            value={subjectSearchQuery}
            onChange={(e) => setSubjectSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          {subjectSearchQuery && (
            <button
              onClick={() => setSubjectSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
      </div>

      {/* Subjects List */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-700 mb-3">
          Subjects ({filteredSubjects.length})
        </h2>

        <div className="space-y-3">
          {filteredSubjects.length > 0 ? (
            filteredSubjects.map((subject, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedSubject(subject);
                  setScreen('papers');
                }}
                className="bg-white rounded-xl p-5 shadow-md cursor-pointer transform transition-all hover:shadow-lg active:scale-98 border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-lg">
                      <FileText className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-800">
                        {subject}
                      </h3>
                      <p className="text-gray-500 text-sm mt-0.5">
                        View past papers
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>No subjects found matching "{subjectSearchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

   // Papers Screen
  if (screen === 'papers') {
    const years = Object.keys(mockPapers).sort((a, b) => b - a);
    
    // Apply filters
    const getFilteredPapers = (papers) => {
      return papers.filter(paper => {
        if (filters.year && parseInt(filters.year) !== paper.id) return false;
        if (filters.type && filters.type !== paper.type) return false;
        if (filters.semester && filters.semester !== paper.semester) return false;
        return true;
      });
    };
    
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
          <button 
            onClick={() => setScreen('subjects')}
            className="text-white/90 text-sm mb-3 flex items-center gap-1 hover:text-white"
          >
            ← Back to Subjects
          </button>
          <h1 className="text-xl font-bold">{selectedSubject}</h1>
          <p className="text-white/90 text-sm">{selectedProgram}</p>
          
          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="mt-3 flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg text-sm"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
          
          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-3 bg-white/10 rounded-lg p-4 space-y-3">
              <select
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
                className="w-full p-2 rounded bg-white text-gray-800"
              >
                <option value="">All Types</option>
                <option value="Midterm">Midterm</option>
                <option value="Final">Final</option>
              </select>
              
              <select
                value={filters.semester}
                onChange={(e) => setFilters({...filters, semester: e.target.value})}
                className="w-full p-2 rounded bg-white text-gray-800"
              >
                <option value="">All Semesters</option>
                <option value="Spring">Spring</option>
                <option value="Fall">Fall</option>
              </select>
              
              <button
                onClick={() => setFilters({ year: '', type: '', semester: '' })}
                className="w-full py-2 bg-white/20 rounded text-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Papers by Year */}
        <div className="p-4 space-y-4 mt-2">
          {years.map((year) => {
            const filteredPapers = getFilteredPapers(mockPapers[year]);
            if (filteredPapers.length === 0) return null;
            
            return (
              <div key={year}>
                <h2 className="text-lg font-bold text-gray-700 mb-2 ml-1">{year}</h2>
                <div className="space-y-3">
                  {filteredPapers.map((paper) => (
                    <div key={paper.id} className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <FileText className="w-5 h-5 text-blue-600" />
                            <h3 className="text-lg font-semibold text-gray-800">
                              {paper.type} - {paper.semester} {year}
                            </h3>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                              {year}
                            </span>
                            <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">
                              {paper.type}
                            </span>
                            <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium">
                              {paper.semester}
                            </span>
                          </div>
                          <p className="text-gray-400 text-xs mt-2">Uploaded: {paper.uploadDate}</p>
                        </div>
                        <button
                          onClick={() => handleDownload(paper, selectedSubject)}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl hover:shadow-lg transition-all active:scale-95 ml-3"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}

export default App;