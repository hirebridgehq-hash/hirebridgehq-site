import React, {useEffect, useState} from 'react';

function JobCard({job}){
  return (
    <div className="p-6 bg-white rounded-2xl shadow flex flex-col">
      <h4 className="text-lg font-semibold mb-1">{job.title}</h4>
      <div className="text-sm text-gray-500 mb-3">{job.location} • {job.type}</div>
      <p className="text-gray-600 mb-4">{job.summary}</p>
      <a className="mt-auto inline-block bg-blue-700 text-white px-4 py-2 rounded" href={`mailto:careers@hirebridgehq.com?subject=Application%20for%20${encodeURIComponent(job.title)}`}>
        Apply
      </a>
    </div>
  )
}

export default function Careers(){
  const [jobs, setJobs] = useState([]);
  useEffect(()=>{
    fetch('/jobs.json').then(r=>r.json()).then(setJobs).catch(()=>setJobs([]));
  },[]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Careers</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {jobs.length===0 && <div className="col-span-3 text-center text-gray-500">No job listings available.</div>}
          {jobs.map(job=> <JobCard key={job.id} job={job} />)}
        </div>
      </div>
    </section>
  )
}
