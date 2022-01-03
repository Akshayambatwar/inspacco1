export const getPageSEOWithLocalities = (city, pid, sid, locality)=> {
    let localitywithcity = locality + ", " + city;
    const detailSEOLocalities = [
        {
            route: `/one_time_services/pest_control`,
            title:
            `Superior Quality Professional Pest Control services for Homes, Residential Societies and Commercial spaces | Inspacco | ${localitywithcity} `,
            description:
            `Professional Pest Control services for Residential Societies, Commercial Spaces and Homes.Covered 170+ cities across india with 10,000+ satisfied customers.Best pricing and Quality Service.Inspacco is leading and most trusted brand for providing pest control services across India`,
        },
        {
            route: `/annual-services/solar`,
            title:
            `Solar for Residential Societies and Commercial spaces | Inspacco| ${localitywithcity}`,
            description:
            `Solar Installation and AMC for Residential Societies and Commercial Spaces. Inspacco is having wide network of 500+ Trusted and Verified suppliers across India to provide best in class service for customers.`,
        },
        {
            route: `/regular-services/housekeeping`,
            title:
            `Professional Housekeeping services at best rate for Residential Societies and Corporates| Insapcco  | ${localitywithcity}`,
            description:
            `Best Housekeeping services for Residential Societies and Commercial Spaces. Inspacco is trusted and known platform to provide best in class gated community services. Get the services at affordable prices with professional service experience`,
        },
        {
            route: `/one_time_services/deep-cleaning`,
            title:
            `Professional Deep Cleaning services for Home, Residential Societies and Commercial spaces - Book Now | Inspacco | ${localitywithcity}`,
            description:
            `Get Professional Deep Cleaning services from Inspacco for Homes, Residential Societies and Commercial Spaces. Book Now and make your space clean and pleasent. Best in class services at affordable rates at your doorstep. We use 100% safe and certified chemicals.`,
        },

        {
            route: `/one_time_services/property_inspection`,
            title:
            `Property Inspection for Home, Residential Societies and Commercial spaces - Book Now | Inspacco | ${localitywithcity}`,
            description:
            `Get Professional Property Inspection services from Inspacco for Homes, Residential Societies and Commercial Spaces. Book Now and make sure to get the property inspection with digital report and analysis.`,
        },
        {
            route: `/regular-services/security`,
            title:
            `Professional Guard and Security services for Residential and Commercial spaces | Inspacco | ${localitywithcity}`,
            description:
            `Inspacco platform provides Security service through supplier partners for your residential Societies and Commercial Spaces. Our platform makes sure to provide professional and suitable supplier partner as per your requirement, get the demo today.`,
        },
        {
            route: `/regular-services/society_manager`,
            title:
            `Facility and Property Manager services for Residential and Commercial spaces at affordable rates | Inspacco | ${localitywithcity}`,
            description:
            `Inspacco platform provides professional Society and Property Manager services for residential Societies and Commercial Spaces. We as a platform assist in providing verified and experienced industry professionals.`,
        },
        {
            route: `/regular-services/accountant`,
            title:
            `Accounting and Accountant services for Residential and Commercial spaces at affordable rates | Inspacco | ${localitywithcity}`,
            description: `Inspacco platform provides Accounting services for residential Societies and Commercial Spaces. We as a platform curates and provides best professionals having relevant experience.`,
        },
        {
            route: `/regular-services/gardening`,
            title:
            `Get Professional Gardening services for Residential and Commercial spaces from Inspacco | Inspacco | ${localitywithcity}`,
            description: `Inspacco platform provides Society and Property Manager services for residential Societies and Commercial Spaces. We as a platform assist in providing verified and experienced professionals.`,
        },
        {
            route: `/regular-services/stpwork`,
            title:
            `Professional Sewage Treatement Plant (STP) maintenance work for Residential and Commercial spaces| Inspacco | ${localitywithcity}`,
            description:
            `Inspacco platform provides professional Sewage treatment plant (STP) maintenance services for residential Societies and Commercial Spaces. We as a platform assist in providing experienced industry professionals.`,
        },
        {
            route: `/regular-services/waste_management`,
            title:
            `Professional Waste Management Services for Residential Societies and Commercial spaces | Inspacco| ${localitywithcity}`,
            description:
            `Professional Waste Management Services  for Residential Societies and Commercial Spaces.Inspacco as a platform provides industry experts for the service.`,
        },
        {
            route: `/regular-services/technician`,
            title:
            `Get Professional Full time Technician Services like Plumber and Electrician for Societies and Commercial spaces | Inspacco | ${localitywithcity}`,
            description:
            `Inspacco platform assist in providing professional and expert Technician Services like Plumber and Electrcian for Residential Societies and Commercial Spaces.`,
        },
        
        {
            route: `/house-keeping/garden-cleaning`,
            title:
            `Garden Maintenance services for Residential Societies and Commercial spaces | Inspacco | ${localitywithcity}`,
            description:
            `Professional Garden Maintenance and devleopment Services for Homes, Residential Societies and Commercial Spaces. Gardening and Horticultural services, Landscape gardening services and other related services at affordable rate. Our professionals are experienced and trained to provide the best in class service`,
        },
        {
            route: `/one_time_services/fabrication`,
            title:
            `Avail Professional Fabrication services from Inspacco for Residential Societies and Commercial spaces | Inspacco | ${localitywithcity}`,
            description:
            `Get Professional and expert fabrication service at your doorstep from our experinced supplier partners, At inspacco you can find reliable and professional supplier partners.`,
        },
        {
            route: `/one_time_services/bird_netting`,
            title:
            `Get Professional Bird Netting work services at your doorstep from Inspacco | Inspacco | ${localitywithcity}`,
            description:
            `At Inspacco, we provide Professional Bird Netting services at best prices, Book now to get the best service experince for Mosquito Net, Invisible Net and Bird net.`,
        },
        {
            route: `/one_time_services/painting`,
            title:
            `Avail Trusted Professional Painting services for your Home, Residential Societies and Commercial spaces | Inspacco | ${localitywithcity}`,
            description:
            `Get Professional Painting services from Inspacco at best rates, Inspacco assist in providing professional and experinced supplier partners to provide best in class service experince, Book now and get demo`,
        },
        {
            route: `/annual-services/ev-solution`,
            title:
            `Get EV Charging Solution for your Residential Societies and Commercial spaces from Inspacco | Inspacco | ${localitywithcity}`,
            description:
            `At Inspacco, we as a platform provides EV Charging Solution for Residential Societies and Commercial spaces, Get Electrcical Vehicle Charging solution as per your community requirement.`,
        },
        {
            route: `/annual-services/generator`,
            title:
            `Get Professional Diesel Generator Maintenance Services | Inspacco | ${localitywithcity}`,
            description:
            `At Inspacco, we provide Diesel Generator maintenance services at your doorstep using our experinced supplier partners, Get the convenience and expertise solution for your community.`,
        },
        {
            route: `/annual-services/gymequipments`,
            title:
            `Get Gym Equipment Maintenance Services for your Residential Societies and Commercial spaces from Inspacco | Inspacco | ${localitywithcity}`,
            description:
            `At Inspacco, we provide Gym Equipment maintenance services and AMC for your Residential Societies and Commercial spaces.`,
        },
        {
            route: `/annual-services/lift`,
            title:
            `Elevator Installation and Maintenance, Lift Installation and AMC services in India | Inspacco | ${localitywithcity}`,
            description:
            `Get Professional Lift or Elevator maintenance services for Residentail and Commercial spaces from Inspacco, providing the best services in the installation of lift and its AMC. You can find the best technical professionals using highly advanced technologies and equipments to offer the services in best possible way.Saftey is one of the core value of Inspacco, we ensure high quality standards and cost effective solutions.`,
        },
        {
            route: `/annual-services/swimmingpool`,
            title:
            `Swimming Pool Maintenance and AMC services for Residential Societies and Commercial spaces | Inspacco | ${localitywithcity}`,
            description:
            `Get Professional Swimming Pool services for Residential Societies and Commercial spaces from Inspacco, as a platform we provide expert, experienced and reliable partners for the service.`,
        },
        {
            route: `/annual-services/cctv`,
            title:
            `CCTV Installation and Maintenance, CCTV Camera AMC services in India | Inspacco | ${localitywithcity}`,
            description:
            `The importance of adequate security measures for homes, residential societies, commerical space can not be ignored and need to have all security measures in place. CCTV installation and maintenace becomes really important considering security in today's world and we at Inspacco provides best in class services as per the budget requirement. We have trained and experienced professionals to provide the quality service at your doorstep.`,
        },
        {
            route: `/annual-services/firesystem`,
            title:
            `Fire Extinguisher Installation, Refilling and Maintenance services in India | Inspacco | ${localitywithcity}`,
            description:
            `It is really importnat to have fire extinguishers in place for everyone's safety and we at Inspacco provide best in class AMC services with trained professional to serve flawless operation threreby inducing the sense of saftey from any fire threat.Get the AMC service from Inspacco to avail upto 10% discount`,
        },
        {
            route: `/inspection/residential-inspection`,
            title:
            `Professional Inspection services for Home and Residential Societies at affordable rates | Inspacco | ${localitywithcity}`,
            description:
            `We at Inspacco provide Comprehensive residential Inspection Services. Our trained & certified inspectors go through your home with the best of tools, aided by latest technology and using a checklist with 100+ checks that makes sure everything is as per the requirements and nothing is left to chance. We make your living space a little more safe and secure.`,
        },
        {
            route: `/inspection/commercial-inspection`,
            title:
            `Professional Inspection services for Commercial spaces across India | Inspacco | ${localitywithcity}`,
            description:
            `Commercial inspections involve a visual examination of accessible areas, physical structure, and operating systems of the space. We understand not all properties are in flawless condition. For this reason, Inspacco's commercial Inspectors will provide clients with practical feedback including areas of concern and tips on how to improve your space.`,
        },
        {
            route: `/interiors/modular-kitchen`,
            title:
            `Best Modular Kitchen designers and service providers across India | Inspacco | ${localitywithcity}`,
            description:
            `With the support of our experts and sophisticated in-house facilities, we at Inspacco offer an array of modular kitchen. You can choose the best design as per your prefrence from our standard catalogue or get it customised as per your choice. Our offered products enhance the beauty of kitchen by its attractive looks and intricate design at market leading prices`,
        },
        {
            route: `/interiors/easy-dry`,
            title:
            `Book Online Easy dry cloth dryer stand at best price | Inspacco | ${localitywithcity}`,
            description:
            `At Inspacco, we provide easy & fast drying rustproof system for clothes. You can choose the best suitable system from pulley systems, wall stands & floor stands as per your requirement and we assure hassle free installation. Our professional will deliver the product and will do the required fittings.`,
        },
        {
            route: `/fabrication/safety-door`,
            title:
            `Safety Doors at best price in India, Steel, Metal and other safety doors | Inspacco | ${localitywithcity}`,
            description:
            `With the support of our experts and trusted professionals, we at Inspacco offer an array of safety doors. You can find products ranging from economy, premium, designer to terrace safety doors. Book Now and get 5% off on the order`,
        },
        {
            route: `/fabrication/canopy`,
            title: `Buy Canopies online at affordable rates in India | Inspacco | ${localitywithcity}`,
            description:
            `At Inspacco, we offer canopy fabrication for terrace, sheds, car parking, truss available in various materials like SS, Mild Steel, Polycarbonate, Aluminium,etc . We not just focus on quality and durability but our product also offers aesthetic appeal, protection from elements.`,
        },
        {
            route: `/civil-work/fencing`,
            title:
            `Get experienced fencing service providers, Fencing Services in India | Inspacco | ${localitywithcity}`,
            description:
            `A wide variety of fencing styles and materials are available at Inspacco,ensuring you get the best fence for your needs. Our fencing type varies from wire fencing to concertina fencing, cross chain fencing, wooden fencing and other metal type fencing. We ensure to provide expertise service at every step to get desirable results.`,
        },
        {
            route: `/civil-work/grouting`,
            title:
            `Professional Grouting service providers, Grouting Services in India | Inspacco | ${localitywithcity}`,
            description:
            `Get all type of grouting services for Homes, Residential Socities and Commercial Spaces from Inspacco. We provide various type of groutings like poxy grouting, Cementitious grouting, Chemical grouting etc.Our scope of work include installation of deep foundation support,fixing anchors, stabilization of the trash pits and repairing fractures in machine bases.`,
        },
        {
            route: `/one_time_services/civil_work`,
            title:
            `Professional Mason service providers, Mason Services in India | Inspacco | ${localitywithcity}`,
            description:
            `The range of residencial services provieded at inspacco for Mason are Brick or Stone Walkways, Patios, and Driveways Brick, Stone, or Prefabricated Block Walls We at Inspacco strive to develop lasting relationships with our clients based on trust, efficiency, and quality.`,
        },
        {
            route: `/civil-work/tiling`,
            title:
            `Get quality tiling services,tiling works at best rates | Inspacco | ${localitywithcity}`,
            description:
            `We provide a professional tiling service for your homes, bathroom, wet rooms, kitchen, swimming pools, common area etc. We also repair, replace and fix tiles to maintain toilets, basins or other sanitary appliances. At Inspacco we provide wide range of tiling for your wall or floor. Whether your choice is ceramic, stone based, mosaic or other, we have the best experienced tilers who can do the job skillfully.`,
        },
        // {
        //     route: `/water-proofing/water-leakage-detection`,
        //     title:
        //     `Get Water leakage detection services for Home, Societies and Commercial spaces | Inspacco | ${localitywithcity}`,
        //     description:
        //     `Detection of any kind of water leakage becomes crucial for the smooth working of the equipments. It becomes important to reduce damages caused by leaks and burst or frozen pipes.We at Inspacco provide you an end-to-end water leakage detection services with the help of modern tools to detect the anomalies and deliver the best possible solution.`,
        // },

        {
            route: `/one_time_services/waterproofing`,
            title:
            `Get Professional and Trusted Water Lekage Detection and Waterproofing solution - Book Now | Inspacco | ${localitywithcity}`,
            description:
            `Professional and Expert Water Lekage Detection and Waterproofing service in Pune. We ensure an end-to-end on-time service through our waterproofing supplier partner industry experts. Book Now and get rid of leakage problems.`,
        },
        {
            route: `/one_time_services/tank-cleaning`,
            title:
            `Security services for Residential and Commercial spaces at affordable rates | Inspacco | ${localitywithcity}`,
            description:
            `Inspacco provides Water tank cleaning on demand as well as AMC service for your esidential Societies and Commercial Spaces. Cleaning of Underground and Overhead water tanks. We provide only verified and experienced professionals to complete the service`,
        },
        {
            route: `/one_time_services/sanitization`,
            title:
            `Sanitization services for Residential and Commercial spaces at affordable rates | Inspacco | ${localitywithcity}`,
            description:
            `Inspacco provides Sanitization service for your esidential Societies and Commercial Spaces. Cleaning of Underground and Overhead water tanks. We provide only verified and experienced professionals to complete the service`,
        },
        {
            route: `/one_time_services/building-insurance`,
            title:
            `Building Insurance for Residential and Commercial spaces at affordable rates | Inspacco | ${localitywithcity}`,
            description:
            `Inspacco provides Building Insurance for your esidential Societies and Commercial Spaces. Cleaning of Underground and Overhead water tanks. We provide only verified and experienced professionals to complete the service`,
        },
    ]
    
    const pageSEOArray = detailSEOLocalities.filter(
        (page) => page.route ===  `/` + pid + `/` + sid 
      );

    return pageSEOArray;
}