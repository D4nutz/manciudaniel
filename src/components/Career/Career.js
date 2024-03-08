import { LiaUniversitySolid } from "react-icons/lia";
import { MdWorkOutline } from "react-icons/md";

const Career = () => {
    const univerity = [
        {
            'type': "Bachelor's degree",
            'name': 'University Politehnica of Bucharest',
            'field': 'Industrial Engineering and Robotics',
            'yearstart': 2019,
            'yearend': 2023,
            'state': '',
            'color': '',
        },
        {
            'type': "Master's degree",
            'name': 'University Politehnica of Bucharest',
            'field': 'Informatical Applications in Industrial Engineering',
            'yearstart': 2023,
            'yearend': 2025,
            'state': '',
            'color': '',
        },
    ];

const jobs = [
        {
            'type': "Freelanceing",
            'name': 'Freelancer',
            'field': 'Frontend Developer',
            'yearstart': 2022,
            'yearend': 2023,
            'state': '',
            'color': '',
        },
        {
            'type': "Full-time job",
            'name': 'Trieurodata',
            'field': 'Frontend Developer',
            'yearstart': 2023,
            'yearend': 'Present',
            'state': '',
            'color': '',
        },
    ];

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    univerity.forEach(index => {
        if(index.yearend < currentYear){
            index.color = '#13f02d';
            index.state = 'Finished';
        } else if (currentYear <= index.yearend || isNaN(index.yearend)){
            index.state = 'In progress';
            index.color = '#f08d13';
        }
    });
    jobs.forEach(index => {
        if(index.yearend < currentYear){
            index.color = '#13f02d';
            index.state = 'Finished';
        } else if (currentYear <= index.yearend || isNaN(index.yearend)){
            index.state = 'In progress';
            index.color = '#f08d13';
        }
    });

    return(
        <div className="w-full h-full flex flex-col items-center justify-evenly">
            <h1 className="w-full text-3xl text-black text-center
                max-lg:text-xl
                dark:text-white">&lt;Career/&gt;</h1>
           <div id="container-career" className="w-full flex flex-row gap-y-10 h-auto
            max-sm:flex-col">
                <div className="w-full h-auto px-4 flex flex-col justify-start gap-4 bg-transparent border-r-2 text-black
                dark:text-white">
                    <div className="flex flex-row 
                    max-lg:h-auto">
                        <p className="text-xl h-full
                        max-sm:text-sm">University</p>
                        <LiaUniversitySolid className="text-3xl h-full ml-auto
                        max-lg:text-xl max-lg:h-auto"/>
                    </div>
                        {univerity.map((job, index) => (
                    <div key={index} style={{ borderLeftColor: job.color }} className="w-full h-auto px-4 flex flex-col gap-2 bg-transparent border-l-2 text-black
                    dark:text-white">
                        <p className="h-full
                        max-lg:text-xs max-lg:h-auto">{job.type}</p>
                        <h1 className="h-full
                        max-lg:text-xs max-lg:h-auto">Intitution: {job.name}</h1>
                        <h2 className="h-full
                        max-lg:text-xs max-lg:h-auto">Field: {job.field}</h2>
                        <div className="h-full
                        max-lg:h-auto">
                            <p className="max-lg:text-xs">Period: {`${job.yearstart}-${job.yearend}`}</p>
                        </div>
                        <p className="h-full
                        max-lg:text-xs max-lg:h-auto"   >Status: {job.state}</p>
                    </div>
                ))}
                </div>
                <div className="w-full h-auto px-4 flex flex-col justify-start gap-4 bg-transparent border-r-2 text-black
                dark:text-white">
                    <div className="flex flex-row
                    max-lg:h-auto">
                        <p className="text-xl h-full
                        max-sm:text-sm">Jobs</p>
                        <MdWorkOutline className="text-3xl h-full ml-auto
                        max-lg:text-xl max-lg:h-auto"/>
                    </div>

                    {jobs.map((job, index) => (
                    <div key={index} style={{ borderLeftColor: job.color }} className="w-full h-auto px-4 flex flex-col gap-2 bg-transparent border-l-2 text-black
                    dark:text-white">
                        <p className="h-full
                        max-lg:text-xs max-lg:h-auto">{job.type}</p>
                        <h1 className="h-full
                        max-lg:text-xs max-lg:h-auto">Company: {job.name}</h1>
                        <h2 className="h-full
                        max-lg:text-xs max-lg:h-auto">Position: {job.field}</h2>
                        <div className="h-full
                        max-lg:h-auto">
                            <p className="max-lg:text-xs">Period: {`${job.yearstart}-${job.yearend}`}</p>
                        </div>
                        <p className="h-full
                        max-lg:text-xs max-lg:h-auto">Status: {job.state}</p>
                    </div>
                ))}
                </div>
           </div>
        </div>
    )
};

export default Career;