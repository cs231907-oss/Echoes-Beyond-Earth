/**
         * VERIFIED NASA MISSION DATASET
         * Curated for emotional documentary storytelling and scientific integrity.
*/

        const EXPLORERS_DATA = {
            opportunity: {
                id: 'opportunity',
                name: 'Opportunity',
                fullTitle: 'Mars Exploration Rover (MER-B)',
                world: 'MARS',
                worldLabel: 'Meridiani Planum, Mars',
                statusType: 'INACTIVE',
                statusText: 'Silent since June 2018 — Mission Complete',
                coordinates: '3.9462° S, 354.4734° E (Perseverance Valley)',
                launchDate: 'July 7, 2003',
                landingDate: 'January 25, 2004',
                endDate: 'June 10, 2018',
                plannedSpan: '90 Martian Days (Sols)',
                actualSpan: '5,111 Sols (Nearly 15 Years)',
                heroImage: 'https://assets.science.nasa.gov/content/dam/science/psd/solar/internal_resources/3447/solar_panels_on_rover_seen_from_above.jpeg',
                heroAlt: 'Self-portrait of NASA Opportunity rover on Mars showing fine Martian dust across its solar wings',
                hubHook: 'Built to survive just 90 days in the Martian cold, this golf-cart-sized geologist drove a full marathon across ancient craters for nearly fifteen years—proving that Mars was once a warm, watery world.',
                whyStillThere: 'Resting quietly in Perseverance Valley on the rim of Endeavour Crater, where a historic planet-wide dust storm darkened the sky in 2018.',
                mission: {
                    title: 'Following the Water Across an Ancient Seafloor',
                    description: 'When Opportunity launched in 2003, scientists knew Mars had dry river channels, yet lacked ground-level proof of whether liquid water had ever pooled on the surface long enough to create habitable environments. Opportunity was targeted to Meridiani Planum because orbital sensors had spotted gray crystalline hematite—a mineral that on Earth almost always forms in liquid water.',
                    questions: [
                        'Did liquid water once soak the surface and underground rocks of Mars?',
                        'What do the layered crater walls reveal about how Mars changed from a wet world to a frozen desert?',
                        'Scientific Scope: Opportunity did not carry life-detection sensors; its role was to discover whether ancient Mars had watery environments capable of supporting life.'
                    ],
                    milestones: [
                        {
                            sol: 'Sol 001',
                            date: 'January 25, 2004',
                            title: 'A Cosmic Hole-in-One at Eagle Crater',
                            desc: 'Cushioned by giant bouncing airbags, Opportunity rolled to a halt inside a tiny 22-meter crater on flat plains. When its cameras opened, engineers were stunned: exposed layered bedrock sat just meters away.',
                            metric: 'Landing Site: Eagle Crater, Meridiani Planum',
                            image: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia05/pia05631/PIA05631.jpg?w=1536&h=509&fit=crop&crop=faces%2Cfocalpoint' 
                            
                        },
                        {
                            sol: 'Sol 046',
                            date: 'March 2004',
                            title: 'Uncovering the Martian "Blueberries"',
                            desc: 'Embedded inside the crater’s rock layers were thousands of tiny grey mineral spheres. Opportunity’s spectrometers proved they were iron-rich hematite concretions formed inside water-saturated ground.',
                            metric: 'Confirmed Mineral: Crystalline Hematite (Fe₂O₃)',
                            image: 'https://images-assets.nasa.gov/image/PIA05584/PIA05584~orig.jpg'
                        },
                        {
                            sol: 'Sol 339',
                            date: 'January 2005',
                            title: 'A Stranger From Space: Heat Shield Rock',
                            desc: 'While inspecting its own discarded thermal heat shield on the plains, Opportunity discovered a basketball-sized iron-nickel meteorite—the very first meteorite ever identified on another planet.',
                            metric: 'Classification: IAB Iron-Nickel Meteorite',
                            image: 'https://images-assets.nasa.gov/image/PIA07269/PIA07269~orig.jpg'
                        },
                        {
                            sol: 'Sol 2681',
                            date: 'August 2011',
                            title: 'Reaching the Rim of Endeavour Crater',
                            desc: 'After surviving treacherous sand ripples and seven years of driving, Opportunity arrived at the 22-kilometer-wide Endeavour Crater, discovering bright veins of gypsum formed by mild, neutral-pH water.',
                            metric: 'Discovery: Hydrated Calcium Sulfate Veins',
                            image: 'https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA14539.width-1600.jpg'
                        },
                        {
                            sol: 'Sol 5111',
                            date: 'June 10, 2018',
                            title: 'When the Sky Turned to Night',
                            desc: 'Having driven 45.16 kilometers—further than any off-world vehicle in history—a massive planetary dust storm blotted out the Sun over Perseverance Valley, draining the rover’s solar reserves.',
                            metric: 'Total Distance Driven: 45.16 Kilometers',
                            image: 'https://assets.science.nasa.gov/content/dam/science/psd/solar/internal_resources/3452/rover_casting_a_shadow.jpeg'
                        }
                    ]
                },
                engineering: {
                    photoUrl: 'https://www.nasa.gov/wp-content/uploads/2023/03/edu_rover_large.jpg?w=1041',
                    photoCaption: 'fetched from NASA Resources',
                    challengeTitle: 'Surviving -105°C Nights & Martian Dust',
                    challengeDesc: 'Engineers expected fine iron-oxide dust to coat Opportunity’s solar panels and end the mission within 90 days. Unexpectedly, seasonal Martian wind gusts ("cleaning events") swept the panels clean year after year, while navigators tilted the rover toward the sun each winter to keep its batteries warm.',
                    schematicType: 'rover',
                    hotspots: [
                        {
                            id: 'solar',
                            x: 52, y: 48,
                            rx: 26, ry: 20,
                            name: 'Triple-Junction Solar Wings',
                            whatItIs: 'Fold-out wing arrays spanning 1.3 square meters across the rover’s deck.',
                            whatItDoes: 'Harvests weak Martian sunlight to generate up to 140 watts of power and charge two lithium-ion batteries.',
                            whyDesigned: 'Arranged like unfolding petals so the rover could fit tightly inside a tetrahedral airbag lander during launch and atmospheric entry.',
                            missionImpact: 'With help from occasional wind gusts that cleared away dust, these wings powered Opportunity for 56 times longer than planned.'
                        },
                        {
                            id: 'idd',
                            x: 35, y: 66,
                            rx: 15, ry: 18,
                            name: 'Robotic Geologist Arm (IDD)',
                            whatItIs: 'A five-jointed mechanical arm carrying a rotating turret of four geological instruments.',
                            whatItDoes: 'Places a Microscopic Imager, Rock Abrasion Tool (RAT), and two spectrometers flush against Martian rocks.',
                            whyDesigned: 'Martian rocks are coated in weathered dust; engineers gave the arm a diamond-toothed grinding wheel to shave away outer crusts and expose fresh stone.',
                            missionImpact: 'Ground into dozens of craters to read the exact chemical fingerprint of ancient Martian groundwater.'
                        },
                        {
                            id: 'nav',
                            x: 65, y: 35,
                            rx: 16, ry: 18,
                            name: 'Low-Gain & High-Gain Antennas',
                            whatItIs: 'A steerable X-band dish and omnidirectional mast rising from the rover’s warm electronics deck.',
                            whatItDoes: 'Relays photographs and scientific spectra to Mars orbiters and directly to giant antennas on Earth.',
                            whyDesigned: 'Because Earth and Mars move independently in their orbits, a steerable dish allowed Opportunity to track Earth across millions of kilometers.',
                            missionImpact: 'Transmitted over 217,000 raw images back to humanity across fourteen years.'
                        },
                        {
                            id: 'bogie',
                            x: 55, y: 76,
                            rx: 30, ry: 15,
                            name: 'Rocker-Bogie Mobility Suspension',
                            whatItIs: 'A springless six-wheel titanium suspension linkage with independent steering motors.',
                            whatItDoes: 'Allows the rover to climb over boulders twice the height of its 25-centimeter aluminum wheels without tipping over.',
                            whyDesigned: 'Extreme Martian cold (-105°C) makes conventional metal springs brittle; a pivoting linkage keeps all six wheels pressed firmly on uneven rock.',
                            missionImpact: 'Carried the rover across 45.16 kilometers of crater rims, sand dunes, and rocky plains.'
                        }
                    ]
                },
                discoveries: {
                    impactHeadline: '“Opportunity transformed Mars from a world thought to be perpetually frozen and barren into a planet verified to have hosted ancient, life-friendly liquid water.”',
                    items: [
                        {
                            tag: 'Discovery 01 — Ancient Groundwater',
                            title: 'The "Blueberries" of Eagle Crater',
                            desc: 'Within weeks of landing, Opportunity examined millimeter-sized spherical pebbles weathering out of layered rock. Using its Mössbauer spectrometer, it proved they were concretions of crystalline hematite—unmistakable evidence that salty groundwater once percolated slowly through porous Martian stone.',
                            significance: 'Provided the first definitive ground-truth mineral proof that liquid water once soaked the Martian subsurface.',
                            image: 'https://images-assets.nasa.gov/image/PIA05584/PIA05584~orig.jpg',
                            alt: 'Close-up photograph of spherical hematite concretions on Mars'
                        },
                        {
                            tag: 'Discovery 02 — Mild, Drinkable Water',
                            title: 'The Bright Gypsum Vein at Endeavour Crater',
                            desc: 'While Eagle Crater’s ancient waters were highly acidic, Opportunity’s arrival at the older Endeavour Crater revealed a bright mineral seam nicknamed "Homestake." Chemical analysis showed it was pure hydrated calcium sulfate (gypsum), deposited by neutral-pH water flowing through underground fractures.',
                            significance: 'Proved that ancient Mars possessed mild, low-acidity water—the exact kind of prebiotic environment where microbial life could potentially thrive.',
                            image: 'https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA14539.width-1600.jpg',
                            alt: 'Opportunity photograph of the bright Homestake gypsum vein on Mars'
                        },
                        {
                            tag: 'Discovery 03 — Planetary Geology',
                            title: 'Heat Shield Rock: An Iron Meteorite on Mars',
                            desc: 'Across the flat plains of Meridiani Planum, Opportunity spotted a pitted, metallic boulder sitting intact on the sand. Spectrometer readings revealed it was 93% iron and 7% nickel—the first meteorite ever discovered on another world.',
                            significance: 'Demonstrated that Mars’ thin ancient and modern atmosphere allows metallic asteroids to survive impact onto the surface.',
                            image: 'https://images-assets.nasa.gov/image/PIA07269/PIA07269~orig.jpg',
                            alt: 'NASA Opportunity rover image of Heat Shield Rock meteorite on Mars'
                        }
                    ],
                    labType: 'spectrometer'
                },
                legacy: {
                    restingTitle: 'Resting Quietly in Perseverance Valley',
                    restingDesc: 'For eight months after the June 2018 global dust storm cleared, engineers at NASA’s Jet Propulsion Laboratory listened for a signal and sent more than 1,000 recovery commands—including wakeup songs beamed across deep space. On February 13, 2019, NASA bid farewell to Opportunity. Today, the rover sits intact in Perseverance Valley on the western rim of Endeavour Crater, at the end of a 45.16-kilometer trail of wheel tracks.',
                    lastSignal: 'Final telemetry received June 10, 2018 (Sol 5111): Power dropped to 22 watt-hours as atmospheric dust opacity reached record levels—poetically remembered around the world as: “My battery is low and it’s getting dark.”',
                    futureDesc: 'By proving beyond doubt that ancient Mars hosted standing water and neutral clays, Opportunity directly shaped the scientific design of Curiosity and Perseverance—the rovers now searching for ancient organic molecules and collecting rock cores for humanity to bring home.',
                    successors: 'Curiosity Rover (MSL) • Perseverance Rover • Mars Sample Return'
                }
            },

            apollo11_lrrr: {
                id: 'apollo11_lrrr',
                name: 'Apollo 11 Retroreflector',
                fullTitle: 'Laser Ranging Retroreflector (LRRR)',
                world: 'MOON',
                worldLabel: 'Tranquility Base, The Moon',
                statusType: 'OPERATIONAL',
                statusText: 'Still Operational Today — 57+ Years Active',
                coordinates: '0.6734° N, 23.4729° E (Mare Tranquillitatis)',
                launchDate: 'July 16, 1969',
                landingDate: 'July 20, 1969',
                endDate: 'Active Today (Zero Power Required)',
                plannedSpan: '10 Years of Measurements',
                actualSpan: '57+ Years (Ongoing Daily Ranging)',
                heroImage: '/assets/AS11-40-5952.jpg',
                // 'https://images-assets.nasa.gov/image/as11-40-5952/as11-40-5952~orig.jpg',
                heroAlt: 'Apollo 11 Laser Ranging Retroreflector resting on the dusty surface of the Moon at Tranquility Base',
                hubHook: 'Placed by hand in the lunar dust by Neil Armstrong and Buzz Aldrin in July 1969, this suitcase-sized array of quartz prisms needs no batteries or radio—and still reflects laser pulses back to Earth today.',
                whyStillThere: 'Standing 18 meters southwest of the Eagle Lunar Module descent stage at Tranquility Base. Because it is purely optical, it never ran out of energy.',
                mission: {
                    title: 'Measuring the Dance of Earth and Moon to the Millimeter',
                    description: 'During the two and a half hours Neil Armstrong and Buzz Aldrin walked on the Moon in July 1969, they deployed a deceptively simple scientific package. By aiming 100 precision quartz corner-prisms toward Earth, they created an immortal optical target—allowing observatories on Earth to fire laser pulses at the Moon and time the 2.5-second echo back.',
                    questions: [
                        'Is the Moon slowly spiraling away from Earth due to the pull of ocean tides?',
                        'Does Albert Einstein’s General Theory of Relativity hold true for massive bodies orbiting in space?',
                        'Does the Moon have a solid interior, or does a liquid core still slosh deep inside?'
                    ],
                    milestones: [
                        {
                            sol: 'July 20, 1969',
                            date: '20:17 UTC',
                            title: 'Touchdown at the Sea of Tranquility',
                            desc: 'The Lunar Module Eagle touches down on Mare Tranquillitatis carrying the Early Apollo Scientific Experiments Package stowed inside its lower equipment bay.',
                            metric: 'Coordinates: 0.6734° N, 23.4729° E',
                            image: 'https://images-assets.nasa.gov/image/as11-40-5875/as11-40-5875~orig.jpg'
                        },
                        {
                            sol: 'July 21, 1969',
                            date: 'EVA Deployment',
                            title: 'Aimed Toward Earth by Human Hands',
                            desc: 'Astronauts carried the 23.6-kilogram mirror palette 18 meters away from the lander and used a simple bubble level and sun-shadow compass to tilt it directly toward Earth.',
                            metric: 'Aiming Accuracy: Within 1° of Earth Center',
                            image: '/assets/as11-40-5942.jpg'
                        },
                        {
                            sol: 'August 1, 1969',
                            date: 'Lick Observatory',
                            title: 'First Photon Echo Across the Void',
                            desc: 'Just eleven days after Apollo 11 walked on the Moon, astronomers at Lick Observatory in California fired a ruby laser pulse and detected the first reflected photons returning from Tranquility Base.',
                            metric: 'Round-Trip Light Time: ~2.56 Seconds',
                            image: '/assets/as11-40-5948-lunar-retrofact.jpg'
                        },
                        {
                            sol: '1970s–1990s',
                            date: 'Global Network',
                            title: 'Watching the Moon Drift Away',
                            desc: 'Joined by reflectors left by Apollo 14, Apollo 15, and Soviet Lunokhod rovers, decades of laser echoes proved the Moon is receding from Earth at 3.8 centimeters per year.',
                            metric: 'Measured Recession: +3.8 cm / Year',
                            image: 'https://images-assets.nasa.gov/image/PIA00302/PIA00302~orig.jpg'
                        },
                        {
                            sol: 'Present Day',
                            date: 'Ongoing Science',
                            title: 'The Oldest Working Experiment on the Moon',
                            desc: 'Long after the nuclear batteries of other Apollo instruments decayed, modern laser observatories still bounce pulses off the Apollo 11 array to within the thickness of a paperclip.',
                            metric: 'Current Precision: ±1.1 Millimeters',
                            image: '/assets/AS15-85-11468.jpg'
                        }
                    ]
                },
                engineering: {
                    photoUrl: '/assets/AS14-67-9386.jpg',
                    photoCaption: 'Apollo 11 photograph AS14-67-9386 showing the deployed Laser Ranging Retroreflector resting in the footprints of the astronauts at Tranquility Base.',
                    challengeTitle: '300°C Temperature Swings & Zero Electricity',
                    challengeDesc: 'On the airless Moon, temperatures swing from +120°C in sunlight to -130°C at night. Ordinary glass mirrors would warp from heat, scattering the returning laser beam. Engineers carved 100 tiny prisms out of ultra-pure fused silica quartz and recessed them into deep aluminum sockets so they stay thermally stable forever without a single wire or battery.',
                    schematicType: 'reflector',
                    hotspots: [
                        {
                            id: 'prisms',
                            x: 60, y: 60,
                            rx: 8, ry: 8,
                            name: '100 Fused-Silica Corner-Cube Prisms',
                            whatItIs: 'A 10-by-10 grid of 3.8-centimeter three-sided quartz prisms.',
                            whatItDoes: 'Reflects incoming laser light back along the exact path it arrived from, regardless of the angle it hits.',
                            whyDesigned: 'A flat mirror would require impossible sub-arcsecond aiming; a three-sided corner cube bounces light off three perpendicular faces so it automatically aims back at the telescope on Earth.',
                            missionImpact: 'Allows observatories on Earth to catch returning photons from 384,400 kilometers away.'
                        },
                        {
                            id: 'frame',
                            x: 52, y: 55,
                            rx: 18, ry: 12,
                            name: 'Recessed Aluminum Thermal Cavities',
                            whatItIs: 'A machined 46-centimeter aluminum panel with deep cylindrical sockets around each prism.',
                            whatItDoes: 'Shades the quartz prisms from harsh oblique sunlight and insulates them against sudden temperature shifts.',
                            whyDesigned: 'If one side of a prism heats up faster than the other, its refractive index bends the laser beam off target; small recessed prisms eliminate thermal warping.',
                            missionImpact: 'Kept the optical array distortion-free through more than 700 lunar days and nights.'
                        },
                        {
                            id: 'gnomon',
                            x: 40, y: 50,
                            rx: 10, ry: 10,
                            name: 'Solar Alignment Gnomon & Bubble Level',
                            whatItIs: 'A manual shadow-pin compass and circular spirit level mounted on the upper frame.',
                            whatItDoes: 'Allowed astronauts in bulky pressurized gloves to level and point the mirror toward Earth in less than five minutes.',
                            whyDesigned: 'With no motors or computers on the reflector, a shadow cast by the lunar sun provided a foolproof mechanical sightline.',
                            missionImpact: 'Aligned the array within one degree of Earth on the very first attempt.'
                        },
                        {
                            id: 'support',
                            x: 52, y: 68,
                            rx: 18, ry: 12,
                            name: 'Tilted Support Kickstand & Base',
                            whatItIs: 'A hinged aluminum palette resting directly on the lunar regolith.',
                            whatItDoes: 'Holds the mirror face at the exact elevation angle required for Tranquility Base’s equatorial latitude.',
                            whyDesigned: 'Engineered to survive the blast of dust kicked up when the Lunar Module ascent stage fired its rocket engine to return Armstrong and Aldrin home.',
                            missionImpact: 'Remains standing upright in the Sea of Tranquility more than half a century later.'
                        }
                    ]
                },
                discoveries: {
                    impactHeadline: '“Out of every 100 quadrillion laser photons fired from Earth, only a single photon bounces back from Tranquility Base—yet that single photon revealed the Moon’s liquid heart and proved Einstein right.”',
                    items: [
                        {
                            tag: 'Discovery 01 — Our Evolving Orbit',
                            title: 'The Moon Is Drifting Away at 3.8 Centimeters a Year',
                            desc: 'By timing laser echoes across decades, physicists proved that Earth’s ocean tides tug on the Moon and transfer rotational energy to it—causing the Moon to spiral outward at roughly the same speed human fingernails grow.',
                            significance: 'Revealed how Earth’s day is gradually lengthening by milliseconds per century as angular momentum shifts to the Moon.',
                            image: 'https://images-assets.nasa.gov/image/as11-40-5875/as11-40-5875~orig.jpg',
                            alt: 'Apollo 11 photograph of Buzz Aldrin beside deployed lunar experiments at Tranquility Base'
                        },
                        {
                            tag: 'Discovery 02 — Fundamental Physics',
                            title: 'Putting Einstein’s General Relativity to the Ultimate Test',
                            desc: 'Einstein’s Equivalence Principle states that gravity pulls on all bodies equally regardless of their composition. Laser ranging verified that the iron-rich Earth and silicate-rich Moon fall toward the Sun at the exact same rate to within one part in ten trillion.',
                            significance: 'Remains one of the most stringent experimental confirmations of General Relativity ever conducted.',
                            image: 'https://images-assets.nasa.gov/image/PIA00302/PIA00302~orig.jpg',
                            alt: 'Full-disc photograph of the Moon captured by the NASA Galileo spacecraft'
                        },
                        {
                            tag: 'Discovery 03 — Deep Inside the Moon',
                            title: 'Uncovering a Fluid Lunar Core',
                            desc: 'Tiny millimeter-scale wobbles in how the Moon rocks back and forth ("lunar librations") measured by the retroreflector showed internal damping that could not happen inside a solid sphere.',
                            significance: 'Provided the first clear evidence that deep inside the Moon lies a partially fluid metallic core.',
                            image: 'https://assets.science.nasa.gov/content/dam/science/psd/earths-moon/lunar-science/Moon-Composition-homepage.png',
                            alt: 'Apollo 11 view of the deployed lunar experiments and Lunar Module Eagle in the distance'
                        }
                    ],
                    labType: 'laser'
                },
                legacy: {
                    restingTitle: 'Still Shining Back from Tranquility Base',
                    restingDesc: 'Every other electronic instrument deployed during the Apollo program eventually ran out of nuclear or solar power in the 1970s. Only the passive laser retroreflectors remain alive. Sitting among the preserved bootprints of Neil Armstrong and Buzz Aldrin—untouched by wind or rain on the airless Moon—the Apollo 11 array continues its silent conversation with telescopes on Earth.',
                    lastSignal: 'Active Optical Status: Continuous photon echoes still recorded by Apache Point (APOLLO), McDonald Observatory, and Grasse Laser Station (~2.56 seconds round-trip flight time).',
                    futureDesc: 'Because Apollo 11 proved that unpowered optical prisms can operate for generations, NASA is flying Next-Generation Lunar Retroreflectors on Artemis commercial landers to build an even more precise navigation network across the Moon.',
                    successors: 'Artemis Lunar Surface Science • Next-Generation Lunar Retroreflectors (NGLR)'
                }
            },

            insight: {
                id: 'insight',
                name: 'InSight Lander',
                fullTitle: 'Interior Exploration using Seismic Investigations',
                world: 'MARS',
                worldLabel: 'Elysium Planitia, Mars',
                statusType: 'INACTIVE',
                statusText: 'Silent since December 2022 — Seismic Archive Complete',
                coordinates: '4.5024° N, 135.6234° E (Elysium Planitia)',
                launchDate: 'May 5, 2018',
                landingDate: 'November 26, 2018',
                endDate: 'December 15, 2022',
                plannedSpan: '709 Martian Sols (2 Earth Years)',
                actualSpan: '1,440 Sols (4 Earth Years)',
                heroImage: 'https://images-assets.nasa.gov/image/PIA25287/PIA25287~orig.jpg',
                heroAlt: 'Final dusty self-portrait of NASA InSight lander on Elysium Planitia, Mars',
                hubHook: 'Instead of roving across craters, InSight stood completely still on the quiet plains of Elysium Planitia, placing a robotic stethoscope onto the Martian soil to listen for the planet’s deep heartbeat.',
                whyStillThere: 'Standing on Elysium Planitia with its white-domed seismometer resting on the ground beside it, its circular solar fans covered in red Martian dust.',
                mission: {
                    title: 'Listening to the Heartbeat of a Rocky Planet',
                    description: 'While rovers explored the surface canyons and craters of Mars, humanity had never looked deep inside the planet. Because Mars lacks Earth’s churning plate tectonics, its interior preserves an untouched fossil record of how rocky planets formed 4.5 billion years ago. InSight was sent to act as a planetary doctor—measuring Mars’ pulse, temperature, and reflexes.',
                    questions: [
                        'Is Mars seismically active today, and how often does the ground tremble with "marsquakes"?',
                        'How thick is the Martian crust, and how large is its metallic core?',
                        'Scientific Scope: InSight was a geophysical mission focused on planetary interior structure, not a search for biological life.'
                    ],
                    milestones: [
                        {
                            sol: 'Sol 001',
                            date: 'November 26, 2018',
                            title: 'Touchdown on a Quiet Volcanic Plain',
                            desc: 'InSight descended onto Elysium Planitia—deliberately chosen not for dramatic scenery, but for flat, quiet soil where a delicate seismometer could sit flush on the ground.',
                            metric: 'Landing Site: Elysium Planitia (4.5° N, 135.6° E)',
                            image: 'https://images-assets.nasa.gov/image/PIA25287/PIA25287~orig.jpg'
                        },
                        {
                            sol: 'Sol 022',
                            date: 'December 19, 2018',
                            title: 'Placing a Stethoscope on Another World',
                            desc: 'Using its robotic arm and grapple hook, InSight lifted the SEIS seismometer off its deck and gently set it directly onto the Martian surface—the first time in history a robot crane-placed an instrument onto another planet.',
                            metric: 'Reach Distance: 1.63 Meters in Front of Lander',
                            image: 'https://images-assets.nasa.gov/image/PIA23896/PIA23896~orig.jpg'
                        },
                        {
                            sol: 'Sol 128',
                            date: 'April 6, 2019',
                            title: 'The First Verified Marsquake',
                            desc: 'During a quiet Martian evening when the wind died down, SEIS recorded a faint, unmistakable rumble rising from deep within the planet—proving that Mars is seismically alive.',
                            metric: 'First Event Cataloged: S0128a',
                            image: 'https://images-assets.nasa.gov/image/PIA24680/PIA24680~orig.jpg'
                        },
                        {
                            sol: 'Sol 1094',
                            date: 'December 24, 2021',
                            title: 'A Meteoroid Strike Uncovers Buried Ice',
                            desc: 'When a magnitude 4 tremor shook the lander, orbital cameras traced the seismic waves to a brand-new 150-meter impact crater surrounded by bright blocks of excavated subsurface water ice.',
                            metric: 'Crater Diameter: 150 Meters (Amazonis Planitia)',
                            image: 'https://images-assets.nasa.gov/image/PIA25582/PIA25582~orig.jpg'
                        },
                        {
                            sol: 'Sol 1440',
                            date: 'December 15, 2022',
                            title: 'Listening Until the Very Last Drop of Power',
                            desc: 'As dust thickened across its solar fans, engineers chose to keep the seismometer running rather than rationing power for heaters—recording 1,319 marsquakes before falling silent.',
                            metric: 'Final Catalog: 1,319 Verified Marsquakes',
                            image: 'https://images-assets.nasa.gov/image/PIA25287/PIA25287~orig.jpg'
                        }
                    ]
                },
                engineering: {
                    photoUrl: 'https://images-assets.nasa.gov/image/PIA25287/PIA25287~orig.jpg',
                    photoCaption: 'InSight’s final dusty self-portrait on Elysium Planitia (PIA25287), showing its circular solar arrays and robotic arm.',
                    challengeTitle: 'Detecting Atomic-Scale Vibrations in Martian Wind',
                    challengeDesc: 'InSight’s seismometer was sensitive enough to measure ground movements smaller than the width of a hydrogen atom. To prevent Martian winds and 90°C daily temperature swings from drowning out faint marsquakes, engineers sealed the sensors inside a titanium vacuum sphere and covered it with an aerodynamic white dome.',
                    schematicType: 'lander',
                    hotspots: [
                        {
                            id: 'solar_fans',
                            x: 22, y: 48,
                            rx: 20, ry: 22,
                            name: 'Dual Circular Solar Fans',
                            whatItIs: 'Two 2.15-meter decagonal solar arrays that unfurled like pleated paper fans after landing.',
                            whatItDoes: 'Provided 600 to 700 watts of electricity under clear skies to power the lander and its instruments.',
                            whyDesigned: 'Wide circular fans maximized light collection in the dim Martian sunlight while folding compactly inside the cruise heat shield.',
                            missionImpact: 'Even when coated in dust, engineers extended their life by using the robotic scoop to trickle sand into the wind, knocking fine dust grains off the panels.'
                        },
                        {
                            id: 'arm',
                            x: 54, y: 26,
                            rx: 18, ry: 18,
                            name: 'Instrument Deployment Arm & Scoop',
                            whatItIs: 'A 2.4-meter robotic crane equipped with a five-fingered mechanical grapple and soil scoop.',
                            whatItDoes: 'Lifted the seismometer, wind shield, and heat probe off the lander deck and placed them directly onto the Martian soil.',
                            whyDesigned: 'A seismometer left on the lander deck would only measure the wind shaking the spacecraft legs; it had to sit directly on the planet’s crust.',
                            missionImpact: 'When the HP³ heat probe encountered unexpectedly cement-like soil, the arm spent two years pinning and burying the probe to gather thermal data.'
                        },
                        {
                            id: 'deck',
                            x: 49, y: 55,
                            rx: 22, ry: 16,
                            name: 'Geophysical Deck & RISE Antenna',
                            whatItIs: 'The central octagonal platform housing avionics, weather sensors, and X-band Doppler radio horns.',
                            whatItDoes: 'Tracks tiny centimeter-scale wobbles in Mars’ rotation as the planet’s liquid metal core sloshes inside.',
                            whyDesigned: 'By measuring Doppler frequency shifts in radio signals sent directly to Earth, scientists could weigh and measure the core without drilling.',
                            missionImpact: 'Revealed that Mars has a surprisingly large liquid iron-nickel core enriched with lighter elements.'
                        },
                        {
                            id: 'tether',
                            x: 78, y: 58,
                            rx: 18, ry: 18,
                            name: 'Isolated Science Tether & SEIS Link',
                            whatItIs: 'A flexible, multi-layered ribbon cable linking the lander deck to the instruments resting on the ground.',
                            whatItDoes: 'Carries power and seismic data without transmitting mechanical vibrations from the lander to the seismometer.',
                            whyDesigned: 'Includes a special "load shunt" loop that decouples any wind-induced shaking of the cable before it reaches the sensor.',
                            missionImpact: 'Delivered four years of pristine, ultra-quiet seismic waveforms from the interior of Mars.'
                        }
                    ]
                },
                discoveries: {
                    impactHeadline: '“For the first time in human history, InSight mapped the deep internal anatomy of another rocky planet—revealing a large molten core and meteoroid impacts that unearth buried ice.”',
                    items: [
                        {
                            tag: 'Discovery 01 — Inside Another World',
                            title: 'Mapping Mars’ Crust, Mantle, and Liquid Core',
                            desc: 'By analyzing how Primary and Secondary marsquake waves bounced off deep interior boundaries, InSight measured the thickness of the Martian crust (24 to 72 km) and discovered a vast molten metallic core with a radius of 1,830 kilometers—larger and less dense than scientists had predicted.',
                            significance: 'Rewrote planetary textbooks on how Mars differentiated and lost its global magnetic field billions of years ago.',
                            image: 'https://images-assets.nasa.gov/image/PIA24680/PIA24680~orig.jpg',
                            alt: 'NASA diagram comparing the internal layers of Earth and Mars discovered by InSight'
                        },
                        {
                            tag: 'Discovery 02 — Buried Water Ice',
                            title: 'Meteoroid Strikes That Excavate Pure Subsurface Ice',
                            desc: 'When InSight detected seismic shockwaves from a major meteoroid strike in December 2021, NASA’s Mars Reconnaissance Orbiter photographed the fresh 150-meter crater—revealing house-sized boulders of pure water ice thrown out from just beneath the dry soil.',
                            significance: 'Proved that buried water ice exists much closer to the warm Martian equator than previously known—a vital resource for future human astronauts.',
                            image: 'https://images-assets.nasa.gov/image/PIA25582/PIA25582~orig.jpg',
                            alt: 'Orbital photograph of a fresh meteoroid impact crater on Mars surrounded by bright blocks of water ice'
                        },
                        {
                            tag: 'Discovery 03 — Soil Mechanics',
                            title: 'The Surprise of Martian "Duricrust"',
                            desc: 'When the self-hammering HP³ "Mole" probe tried to burrow 5 meters deep, it discovered that Elysium Planitia’s soil was cemented into a cohesive, porous crust unlike loose beach sand. Engineers used the robotic arm to press on the soil and measure its exact mechanical strength.',
                            significance: 'Gave future human landing and drilling engineers critical real-world data on how Martian soil behaves under pressure.',
                            image: 'https://images-assets.nasa.gov/image/PIA23896/PIA23896~orig.jpg',
                            alt: 'InSight robotic arm scoop pressing on the Martian surface beside the heat probe'
                        }
                    ],
                    labType: 'seismic'
                },
                legacy: {
                    restingTitle: 'The Quiet Listener of Elysium Planitia',
                    restingDesc: 'On December 15, 2022, after four years of listening to the subtle tremors of Mars, InSight’s dust-covered solar arrays could no longer recharge its batteries. The lander stands peacefully on the flat expanse of Elysium Planitia, its white-domed seismometer still resting on the soil in front of it—having given humanity its first interior map of another rocky world.',
                    lastSignal: 'Final message shared with the public in December 2022 alongside its last photograph: “My power’s really low, so this may be the last image I can send. Don’t worry about me though: my time here has been both productive and serene.”',
                    futureDesc: 'The seismic techniques perfected by InSight are now being adapted for NASA’s Dragonfly rotorcraft mission to Saturn’s moon Titan and the Farside Seismic Suite headed to the Moon.',
                    successors: 'Dragonfly (Titan Seismic Mission) • Lunar Farside Seismic Suite'
                }
            },
           apollo_lm: {
                "id": "apollo_lm",
                "name": "Apollo Lunar Module Descent Stages",
                "fullTitle": "Apollo Lunar Module (LM) Descent Stages",
                "world": "MOON",
                "worldLabel": "Apollo landing sites, The Moon",
                "statusType": "INACTIVE",
                "statusText": "Permanently resting on the lunar surface — Mission hardware left behind",
                "coordinates": "See NASA mission archive",
                "launchDate": "July 16, 1969",
                "landingDate": "July 20, 1969",
                "endDate": "Descent stages remain at their landing sites",
                "plannedSpan": "Short surface stay",
                "actualSpan": "Decades on the lunar surface",
                "heroImage": "assets/AS11-40-5927.jpg",
                "heroAlt": "Apollo Lunar Module descent stage footpad on the lunar surface",
                "hubHook": "The Lunar Module carried astronauts down to the Moon. Its lower descent stage stayed behind after the ascent stage lifted the crew back into lunar orbit.",
                "whyStillThere": "The descent stages remain at their respective Apollo landing sites, serving as the bases from which astronauts departed the surface.",
                "mission": {
                    "title": "The Launch Pads That Stayed Behind",
                    "description": "The Apollo Lunar Module was built in two parts. After the astronauts transferred to the ascent stage for the return to lunar orbit, the descent stage—with its landing legs, engine and equipment—was left on the Moon.",
                    "questions": [
                        "Why was the Lunar Module divided into a descent stage and an ascent stage?",
                        "What can the abandoned stages tell us about the Apollo landing sites?",
                        "The descent stage was not designed to launch from the Moon again; it remained as surface hardware."
                    ],
                    "milestones": [
                        {
                            "sol": "July 20, 1969",
                            "date": "July 20, 1969",
                            "title": "Eagle touches down",
                            "desc": "Apollo 11’s Lunar Module Eagle lands at Tranquility Base. Its descent stage supports the crew during their stay on the surface.",
                            "metric": "Landing site: Tranquility Base",
                            "image": "assets/AS11-40-5927.jpg"
                        }
                    ]
                },
                "engineering": {
                    "photoUrl": "assets/AS11-40-5927.jpg",
                    "photoCaption": "Apollo Lunar Module descent stage footpad on the lunar surface",
                    "challengeTitle": "Engineering the Apollo Lunar Module Descent Stages",
                    "challengeDesc": "The Apollo Lunar Module was built in two parts. After the astronauts transferred to the ascent stage for the return to lunar orbit, the descent stage—with its landing legs, engine and equipment—was left on the Moon.",
                    "schematicType": "apollo-lm",
                    "hotspots": [
                        {
                            "id": "primary",
                            "x": 50,
                            "y": 55,
                            "rx": 18,
                            "ry": 16,
                            "name": "Descent-stage structure",
                            "whatItIs": "Lower module containing the landing engine, propellant tanks and equipment.",
                            "whatItDoes": "Lower module containing the landing engine, propellant tanks and equipment.",
                            "whyDesigned": "This component was included to support the Apollo Lunar Module Descent Stages mission and its operating environment.",
                            "missionImpact": "The lower stages remain on the Moon as physical evidence of the Apollo landings."
                        },
                        {
                            "id": "instrument",
                            "x": 50,
                            "y": 30,
                            "rx": 15,
                            "ry": 14,
                            "name": "Ascent-stage interface",
                            "whatItIs": "Connection between the lower descent stage and the crewed ascent stage.",
                            "whatItDoes": "Connection between the lower descent stage and the crewed ascent stage.",
                            "whyDesigned": "This component was included to support the Apollo Lunar Module Descent Stages mission and its operating environment.",
                            "missionImpact": "The lower stages remain on the Moon as physical evidence of the Apollo landings."
                        },
                        {
                            "id": "structure",
                            "x": 28,
                            "y": 78,
                            "rx": 17,
                            "ry": 15,
                            "name": "Landing legs and footpads",
                            "whatItIs": "Four-legged landing structure that distributed the vehicle's weight on lunar soil.",
                            "whatItDoes": "Four-legged landing structure that distributed the vehicle's weight on lunar soil.",
                            "whyDesigned": "This component was included to support the Apollo Lunar Module Descent Stages mission and its operating environment.",
                            "missionImpact": "The lower stages remain on the Moon as physical evidence of the Apollo landings."
                        },
                        {
                            "id": "system",
                            "x": 50,
                            "y": 68,
                            "rx": 18,
                            "ry": 16,
                            "name": "Descent engine",
                            "whatItIs": "Throttleable engine used to slow the Lunar Module for touchdown.",
                            "whatItDoes": "Throttleable engine used to slow the Lunar Module for touchdown.",
                            "whyDesigned": "This component was included to support the Apollo Lunar Module Descent Stages mission and its operating environment.",
                            "missionImpact": "The lower stages remain on the Moon as physical evidence of the Apollo landings."
                        }
                    ]
                },
                "discoveries": {
                    "impactHeadline": "A permanent record of the landing",
                    "items": [
                        {
                            "tag": "Mission finding",
                            "title": "A permanent record of the landing",
                            "desc": "The descent stage, footpads and associated hardware remain at the landing site. Lunar orbiters have imaged Apollo landing areas and the hardware left there.",
                            "significance": "The descent stage, footpads and associated hardware remain at the landing site. Lunar orbiters have imaged Apollo landing areas and the hardware left there.",
                            "image": "assets/AS11-40-5927.jpg",
                            "alt": "Apollo Lunar Module descent stage footpad on the lunar surface"
                        }
                    ],
                    "labType": "spectrometer"
                },
                "legacy": {
                    "restingTitle": "Apollo Lunar Module Descent Stages — its final place",
                    "restingDesc": "The lower stages remain on the Moon as physical evidence of the Apollo landings.",
                    "lastSignal": "Permanently resting on the lunar surface — Mission hardware left behind",
                    "futureDesc": "The descent stage, footpads and associated hardware remain at the landing site. Lunar orbiters have imaged Apollo landing areas and the hardware left there.",
                    "successors": "NASA mission archive"
                }
            },
            lrv: {
                "id": "lrv",
                "name": "Lunar Roving Vehicles",
                "fullTitle": "Apollo Lunar Roving Vehicle (LRV)",
                "world": "MOON",
                "worldLabel": "Apollo 15, 16 and 17 landing sites, The Moon",
                "statusType": "INACTIVE",
                "statusText": "Parked on the Moon since the Apollo missions",
                "coordinates": "See NASA mission archive",
                "launchDate": "Apollo 15 launched July 26, 1971",
                "landingDate": "First used on the Moon: July 31, 1971",
                "endDate": "Parked after each mission",
                "plannedSpan": "Designed for short lunar traverses",
                "actualSpan": "Three rovers used across Apollo 15, 16 and 17",
                "heroImage": "https://images-assets.nasa.gov/image/as15-86-11603/as15-86-11603~orig.jpg",
                "heroAlt": "Apollo Lunar Roving Vehicle on the lunar surface",
                "hubHook": "For three Apollo crews, the Moon became a place they could drive. The battery-powered rovers extended the distance astronauts could travel from their landers.",
                "whyStillThere": "The three LRVs were left parked near the Apollo 15, 16 and 17 landing sites.",
                "mission": {
                    "title": "The Moon Buggies That Never Came Home",
                    "description": "NASA’s Lunar Roving Vehicle was a lightweight, battery-powered electric vehicle carried folded on the Lunar Module. Astronauts deployed it on the surface to travel farther while collecting samples and setting up experiments.",
                    "questions": [
                        "How did a compact rover fold for transport and unfold on the Moon?",
                        "How did the rover extend the astronauts’ scientific range?",
                        "The LRV was used on Apollo 15, Apollo 16 and Apollo 17."
                    ],
                    "milestones": [
                        {
                            "sol": "July 31, 1971",
                            "date": "July 31, 1971",
                            "title": "First drive on the Moon",
                            "desc": "Apollo 15 astronauts David Scott and James Irwin use the first Lunar Roving Vehicle during their lunar surface exploration.",
                            "metric": "First deployment: Apollo 15",
                            "image": "https://images-assets.nasa.gov/image/as15-86-11603/as15-86-11603~orig.jpg"
                        }
                    ]
                },
                "engineering": {
                    "photoUrl": "https://images-assets.nasa.gov/image/as15-86-11603/as15-86-11603~orig.jpg",
                    "photoCaption": "Apollo Lunar Roving Vehicle on the lunar surface",
                    "challengeTitle": "Engineering the Lunar Roving Vehicles",
                    "challengeDesc": "NASA’s Lunar Roving Vehicle was a lightweight, battery-powered electric vehicle carried folded on the Lunar Module. Astronauts deployed it on the surface to travel farther while collecting samples and setting up experiments.",
                    "schematicType": "lunar-rover",
                    "hotspots": [
                        {
                            "id": "primary",
                            "x": 50,
                            "y": 48,
                            "rx": 18,
                            "ry": 16,
                            "name": "Crew seats and chassis",
                            "whatItIs": "Lightweight frame carrying the astronauts and equipment.",
                            "whatItDoes": "Lightweight frame carrying the astronauts and equipment.",
                            "whyDesigned": "This component was included to support the Lunar Roving Vehicles mission and its operating environment.",
                            "missionImpact": "The three electric rovers remain where their crews parked them, still marking the routes of the later Apollo expeditions."
                        },
                        {
                            "id": "instrument",
                            "x": 50,
                            "y": 78,
                            "rx": 15,
                            "ry": 14,
                            "name": "Front and rear wheels",
                            "whatItIs": "Four independently driven wheels for lunar surface mobility.",
                            "whatItDoes": "Four independently driven wheels for lunar surface mobility.",
                            "whyDesigned": "This component was included to support the Lunar Roving Vehicles mission and its operating environment.",
                            "missionImpact": "The three electric rovers remain where their crews parked them, still marking the routes of the later Apollo expeditions."
                        },
                        {
                            "id": "structure",
                            "x": 68,
                            "y": 42,
                            "rx": 17,
                            "ry": 15,
                            "name": "Navigation unit",
                            "whatItIs": "Displays heading, distance and direction for traverse planning.",
                            "whatItDoes": "Displays heading, distance and direction for traverse planning.",
                            "whyDesigned": "This component was included to support the Lunar Roving Vehicles mission and its operating environment.",
                            "missionImpact": "The three electric rovers remain where their crews parked them, still marking the routes of the later Apollo expeditions."
                        },
                        {
                            "id": "system",
                            "x": 50,
                            "y": 18,
                            "rx": 18,
                            "ry": 16,
                            "name": "High-gain antenna",
                            "whatItIs": "Communications equipment used to relay voice and data.",
                            "whatItDoes": "Communications equipment used to relay voice and data.",
                            "whyDesigned": "This component was included to support the Lunar Roving Vehicles mission and its operating environment.",
                            "missionImpact": "The three electric rovers remain where their crews parked them, still marking the routes of the later Apollo expeditions."
                        }
                    ]
                },
                "discoveries": {
                    "impactHeadline": "A wider field of lunar exploration",
                    "items": [
                        {
                            "tag": "Mission finding",
                            "title": "A wider field of lunar exploration",
                            "desc": "The rover allowed crews to travel farther from the Lunar Module and transport tools and samples during their surface traverses.",
                            "significance": "The rover allowed crews to travel farther from the Lunar Module and transport tools and samples during their surface traverses.",
                            "image": "https://images-assets.nasa.gov/image/as15-86-11603/as15-86-11603~orig.jpg",
                            "alt": "Apollo Lunar Roving Vehicle on the lunar surface"
                        }
                    ],
                    "labType": "spectrometer"
                },
                "legacy": {
                    "restingTitle": "Lunar Roving Vehicles — its final place",
                    "restingDesc": "The three electric rovers remain where their crews parked them, still marking the routes of the later Apollo expeditions.",
                    "lastSignal": "Parked on the Moon since the Apollo missions",
                    "futureDesc": "The rover allowed crews to travel farther from the Lunar Module and transport tools and samples during their surface traverses.",
                    "successors": "NASA mission archive"
                }
            },
            alsep: {
                "id": "alsep",
                "name": "ALSEP Scientific Packages",
                "fullTitle": "Apollo Lunar Surface Experiments Package (ALSEP)",
                "world": "MOON",
                "worldLabel": "Apollo landing sites, The Moon",
                "statusType": "INACTIVE",
                "statusText": "Transmissions ended in September 1977 — Instruments remain on the Moon",
                "coordinates": "See NASA mission archive",
                "launchDate": "Deployed during Apollo 12–17",
                "landingDate": "First package deployed November 19, 1969",
                "endDate": "September 30, 1977 (network shutdown)",
                "plannedSpan": "Long-duration surface science",
                "actualSpan": "Operated for years after astronaut departures",
                "heroImage": "assets/as14-67-09361.jpg",
                "heroAlt": "Apollo lunar surface experiments and instruments on the Moon",
                "hubHook": "After the astronauts left, scientific instruments stayed behind to keep listening, measuring and transmitting data from the lunar surface.",
                "whyStillThere": "ALSEP stations were deployed at several Apollo landing sites; their instruments were shut down in 1977.",
                "mission": {
                    "title": "Experiments That Kept Working After Departure",
                    "description": "ALSEP was a set of scientific instruments deployed by Apollo crews. Depending on the mission, packages included seismometers, heat-flow experiments, magnetometers and other instruments connected to a central station.",
                    "questions": [
                        "What can seismic waves reveal about the Moon’s interior?",
                        "How do long-running measurements help scientists study the lunar environment?",
                        "ALSEP stations operated remotely after the astronauts returned to Earth."
                    ],
                    "milestones": [
                        {
                            "sol": "November 19, 1969",
                            "date": "November 19, 1969",
                            "title": "The first ALSEP is deployed",
                            "desc": "Apollo 12 astronauts deploy the first Apollo Lunar Surface Experiments Package, beginning a network of long-term lunar science stations.",
                            "metric": "First deployment: Apollo 12",
                            "image": "assets/as14-67-09361.jpg"
                        }
                    ]
                },
                "engineering": {
                    "photoUrl": "assets/as14-67-09361.jpg",
                    "photoCaption": "Apollo lunar surface experiments and instruments on the Moon",
                    "challengeTitle": "Engineering the ALSEP Scientific Packages",
                    "challengeDesc": "ALSEP was a set of scientific instruments deployed by Apollo crews. Depending on the mission, packages included seismometers, heat-flow experiments, magnetometers and other instruments connected to a central station.",
                    "schematicType": "alsep",
                    "hotspots": [
                        {
                            "id": "primary",
                            "x": 50,
                            "y": 45,
                            "rx": 18,
                            "ry": 16,
                            "name": "Central station",
                            "whatItIs": "Power and communications hub for the deployed experiment package.",
                            "whatItDoes": "Power and communications hub for the deployed experiment package.",
                            "whyDesigned": "This component was included to support the ALSEP Scientific Packages mission and its operating environment.",
                            "missionImpact": "The instruments are silent now, but their recorded measurements remain part of the scientific archive of the Moon."
                        },
                        {
                            "id": "instrument",
                            "x": 28,
                            "y": 70,
                            "rx": 15,
                            "ry": 14,
                            "name": "Seismometer",
                            "whatItIs": "Instrument that measured moonquakes and impacts.",
                            "whatItDoes": "Instrument that measured moonquakes and impacts.",
                            "whyDesigned": "This component was included to support the ALSEP Scientific Packages mission and its operating environment.",
                            "missionImpact": "The instruments are silent now, but their recorded measurements remain part of the scientific archive of the Moon."
                        },
                        {
                            "id": "structure",
                            "x": 70,
                            "y": 70,
                            "rx": 17,
                            "ry": 15,
                            "name": "Heat-flow experiment",
                            "whatItIs": "Probe system that measured heat moving through the lunar subsurface.",
                            "whatItDoes": "Probe system that measured heat moving through the lunar subsurface.",
                            "whyDesigned": "This component was included to support the ALSEP Scientific Packages mission and its operating environment.",
                            "missionImpact": "The instruments are silent now, but their recorded measurements remain part of the scientific archive of the Moon."
                        },
                        {
                            "id": "system",
                            "x": 75,
                            "y": 35,
                            "rx": 18,
                            "ry": 16,
                            "name": "Magnetometer",
                            "whatItIs": "Instrument for measuring the local lunar magnetic field.",
                            "whatItDoes": "Instrument for measuring the local lunar magnetic field.",
                            "whyDesigned": "This component was included to support the ALSEP Scientific Packages mission and its operating environment.",
                            "missionImpact": "The instruments are silent now, but their recorded measurements remain part of the scientific archive of the Moon."
                        }
                    ]
                },
                "discoveries": {
                    "impactHeadline": "A long-running lunar science network",
                    "items": [
                        {
                            "tag": "Mission finding",
                            "title": "A long-running lunar science network",
                            "desc": "The packages returned data on moonquakes, the lunar environment and the physical properties of the Moon until the network was shut down in 1977.",
                            "significance": "The packages returned data on moonquakes, the lunar environment and the physical properties of the Moon until the network was shut down in 1977.",
                            "image": "assets/as14-67-09361.jpg",
                            "alt": "Apollo lunar surface experiments and instruments on the Moon"
                        }
                    ],
                    "labType": "seismic"
                },
                "legacy": {
                    "restingTitle": "ALSEP Scientific Packages — its final place",
                    "restingDesc": "The instruments are silent now, but their recorded measurements remain part of the scientific archive of the Moon.",
                    "lastSignal": "Transmissions ended in September 1977 — Instruments remain on the Moon",
                    "futureDesc": "The packages returned data on moonquakes, the lunar environment and the physical properties of the Moon until the network was shut down in 1977.",
                    "successors": "NASA mission archive"
                }
            },
            surveyor: {
                "id": "surveyor",
                "name": "Surveyor Landers",
                "fullTitle": "NASA Surveyor Lunar Lander Program",
                "world": "MOON",
                "worldLabel": "Oceanus Procellarum and other lunar landing sites, The Moon",
                "statusType": "INACTIVE",
                "statusText": "All Surveyor missions ended — Landers remain on the Moon",
                "coordinates": "See NASA mission archive",
                "launchDate": "Surveyor 1 launched May 30, 1966",
                "landingDate": "Surveyor 1 landed June 2, 1966",
                "endDate": "Last Surveyor mission: 1968",
                "plannedSpan": "Engineering and lunar-surface investigations",
                "actualSpan": "Multiple missions across 1966–1968",
                "heroImage": "assets/AS12-48-7133.jpg",
                "heroAlt": "Lunar Reconnaissance Orbiter view of the Apollo 12 and Surveyor 3 landing area",
                "hubHook": "Before astronauts walked on the Moon, robotic Surveyor landers tested whether the surface could safely support a spacecraft.",
                "whyStillThere": "The Surveyor landers remain at their individual lunar landing sites; Surveyor 3 was later visited by Apollo 12 astronauts.",
                "mission": {
                    "title": "The Robotic Pathfinders Before Apollo",
                    "description": "The Surveyor program sent robotic spacecraft to make controlled soft landings, photograph the surface and test lunar soil. Their results helped establish that the surface could support an Apollo Lunar Module.",
                    "questions": [
                        "Could a spacecraft land safely on the lunar surface?",
                        "What were the mechanical properties of lunar soil?",
                        "Surveyor 3 was visited by Apollo 12 astronauts in November 1969."
                    ],
                    "milestones": [
                        {
                            "sol": "June 2, 1966",
                            "date": "June 2, 1966",
                            "title": "Surveyor 1 lands",
                            "desc": "Surveyor 1 makes the first successful U.S. soft landing on the Moon and begins returning images of the surface.",
                            "metric": "First U.S. soft landing: June 2, 1966",
                            "image": "assets/AS12-48-7133.jpg"
                        }
                    ]
                },
                "engineering": {
                    "photoUrl": "assets/AS12-48-7133.jpg",
                    "photoCaption": "Lunar Reconnaissance Orbiter view of the Apollo 12 and Surveyor 3 landing area",
                    "challengeTitle": "Engineering the Surveyor Landers",
                    "challengeDesc": "The Surveyor program sent robotic spacecraft to make controlled soft landings, photograph the surface and test lunar soil. Their results helped establish that the surface could support an Apollo Lunar Module.",
                    "schematicType": "surveyor",
                    "hotspots": [
                        {
                            "id": "primary",
                            "x": 50,
                            "y": 45,
                            "rx": 18,
                            "ry": 16,
                            "name": "Landing frame and body",
                            "whatItIs": "Main spacecraft structure carrying the surface instruments.",
                            "whatItDoes": "Main spacecraft structure carrying the surface instruments.",
                            "whyDesigned": "This component was included to support the Surveyor Landers mission and its operating environment.",
                            "missionImpact": "The Surveyor spacecraft remain at their landing sites, with Surveyor 3 becoming a destination for an Apollo crew."
                        },
                        {
                            "id": "instrument",
                            "x": 50,
                            "y": 78,
                            "rx": 15,
                            "ry": 14,
                            "name": "Landing legs and footpads",
                            "whatItIs": "Supports that absorbed touchdown loads and held the lander above the surface.",
                            "whatItDoes": "Supports that absorbed touchdown loads and held the lander above the surface.",
                            "whyDesigned": "This component was included to support the Surveyor Landers mission and its operating environment.",
                            "missionImpact": "The Surveyor spacecraft remain at their landing sites, with Surveyor 3 becoming a destination for an Apollo crew."
                        },
                        {
                            "id": "structure",
                            "x": 72,
                            "y": 22,
                            "rx": 17,
                            "ry": 15,
                            "name": "Television camera",
                            "whatItIs": "Camera system used to return images of the lunar surface.",
                            "whatItDoes": "Camera system used to return images of the lunar surface.",
                            "whyDesigned": "This component was included to support the Surveyor Landers mission and its operating environment.",
                            "missionImpact": "The Surveyor spacecraft remain at their landing sites, with Surveyor 3 becoming a destination for an Apollo crew."
                        },
                        {
                            "id": "system",
                            "x": 28,
                            "y": 55,
                            "rx": 18,
                            "ry": 16,
                            "name": "Soil-mechanics instruments",
                            "whatItIs": "Sensors and surface equipment used to study lunar soil properties.",
                            "whatItDoes": "Sensors and surface equipment used to study lunar soil properties.",
                            "whyDesigned": "This component was included to support the Surveyor Landers mission and its operating environment.",
                            "missionImpact": "The Surveyor spacecraft remain at their landing sites, with Surveyor 3 becoming a destination for an Apollo crew."
                        }
                    ]
                },
                "discoveries": {
                    "impactHeadline": "The surface can support a lander",
                    "items": [
                        {
                            "tag": "Mission finding",
                            "title": "The surface can support a lander",
                            "desc": "Surveyor imagery and surface tests showed that a lunar lander could settle on the Moon without sinking into an impossibly deep layer of dust.",
                            "significance": "Surveyor imagery and surface tests showed that a lunar lander could settle on the Moon without sinking into an impossibly deep layer of dust.",
                            "image": "assets/AS12-48-7133.jpg",
                            "alt": "Lunar Reconnaissance Orbiter view of the Apollo 12 and Surveyor 3 landing area"
                        }
                    ],
                    "labType": "spectrometer"
                },
                "legacy": {
                    "restingTitle": "Surveyor Landers — its final place",
                    "restingDesc": "The Surveyor spacecraft remain at their landing sites, with Surveyor 3 becoming a destination for an Apollo crew.",
                    "lastSignal": "All Surveyor missions ended — Landers remain on the Moon",
                    "futureDesc": "Surveyor imagery and surface tests showed that a lunar lander could settle on the Moon without sinking into an impossibly deep layer of dust.",
                    "successors": "NASA mission archive"
                }
            },
            sojourner: {
                "id": "sojourner",
                "name": "Sojourner Rover",
                "fullTitle": "Mars Pathfinder Microrover",
                "world": "MARS",
                "worldLabel": "Ares Vallis, Mars",
                "statusType": "INACTIVE",
                "statusText": "Last data received September 27, 1997 — Mission complete",
                "coordinates": "See NASA mission archive",
                "launchDate": "December 4, 1996",
                "landingDate": "July 4, 1997",
                "endDate": "September 27, 1997 (last data)",
                "plannedSpan": "7 Martian days",
                "actualSpan": "83 Martian days",
                "heroImage": "assets/pia01551.jpeg",
                "heroAlt": "Sojourner rover near the Mars Pathfinder lander on Mars",
                "hubHook": "A small six-wheeled rover became the first wheeled vehicle to operate on another planet, exploring rocks beside its Pathfinder home.",
                "whyStillThere": "Sojourner remains at the Mars Pathfinder landing site in Ares Vallis, beside the Sagan Memorial Station.",
                "mission": {
                    "title": "The First Wheels to Roll on Another Planet",
                    "description": "Sojourner was a small technology-demonstration rover delivered to Mars by the Pathfinder lander. It examined nearby rocks and soil, sending images and measurements back through the lander.",
                    "questions": [
                        "Could a small rover move safely across the surface of Mars?",
                        "What were nearby rocks and soils made of?",
                        "Sojourner operated for 83 sols, far exceeding its planned seven-sol mission."
                    ],
                    "milestones": [
                        {
                            "sol": "July 4, 1997",
                            "date": "July 4, 1997",
                            "title": "Pathfinder and Sojourner arrive",
                            "desc": "The Pathfinder lander opens its ramps and Sojourner begins its work on the Martian surface.",
                            "metric": "Mission duration: 83 sols",
                            "image": "assets/pia01551.jpeg"
                        }
                    ]
                },
                "engineering": {
                    "photoUrl": "assets/pia01551.jpeg",
                    "photoCaption": "Sojourner rover near the Mars Pathfinder lander on Mars",
                    "challengeTitle": "Engineering the Sojourner Rover",
                    "challengeDesc": "Sojourner was a small technology-demonstration rover delivered to Mars by the Pathfinder lander. It examined nearby rocks and soil, sending images and measurements back through the lander.",
                    "schematicType": "sojourner",
                    "hotspots": [
                        {
                            "id": "primary",
                            "x": 50,
                            "y": 48,
                            "rx": 18,
                            "ry": 16,
                            "name": "Rover body",
                            "whatItIs": "Compact electronics and instrument platform carried by the Pathfinder lander.",
                            "whatItDoes": "Compact electronics and instrument platform carried by the Pathfinder lander.",
                            "whyDesigned": "This component was included to support the Sojourner Rover mission and its operating environment.",
                            "missionImpact": "The small rover remains beside Pathfinder, the first of a line of mobile Mars explorers."
                        },
                        {
                            "id": "instrument",
                            "x": 25,
                            "y": 60,
                            "rx": 15,
                            "ry": 14,
                            "name": "Alpha proton X-ray spectrometer",
                            "whatItIs": "Instrument used to examine the elemental composition of rocks and soil.",
                            "whatItDoes": "Instrument used to examine the elemental composition of rocks and soil.",
                            "whyDesigned": "This component was included to support the Sojourner Rover mission and its operating environment.",
                            "missionImpact": "The small rover remains beside Pathfinder, the first of a line of mobile Mars explorers."
                        },
                        {
                            "id": "structure",
                            "x": 50,
                            "y": 20,
                            "rx": 17,
                            "ry": 15,
                            "name": "Camera and antenna mast",
                            "whatItIs": "Imaging and communications hardware linking rover operations to Pathfinder.",
                            "whatItDoes": "Imaging and communications hardware linking rover operations to Pathfinder.",
                            "whyDesigned": "This component was included to support the Sojourner Rover mission and its operating environment.",
                            "missionImpact": "The small rover remains beside Pathfinder, the first of a line of mobile Mars explorers."
                        },
                        {
                            "id": "system",
                            "x": 50,
                            "y": 82,
                            "rx": 18,
                            "ry": 16,
                            "name": "Six-wheel mobility system",
                            "whatItIs": "Wheels and suspension that enabled short-range movement around the landing site.",
                            "whatItDoes": "Wheels and suspension that enabled short-range movement around the landing site.",
                            "whyDesigned": "This component was included to support the Sojourner Rover mission and its operating environment.",
                            "missionImpact": "The small rover remains beside Pathfinder, the first of a line of mobile Mars explorers."
                        }
                    ]
                },
                "discoveries": {
                    "impactHeadline": "A new way to explore Mars",
                    "items": [
                        {
                            "tag": "Mission finding",
                            "title": "A new way to explore Mars",
                            "desc": "Sojourner demonstrated that a remotely operated rover could navigate around rocks, inspect targets and perform surface science on Mars.",
                            "significance": "Sojourner demonstrated that a remotely operated rover could navigate around rocks, inspect targets and perform surface science on Mars.",
                            "image": "assets/pia01551.jpeg",
                            "alt": "Sojourner rover near the Mars Pathfinder lander on Mars"
                        }
                    ],
                    "labType": "spectrometer"
                },
                "legacy": {
                    "restingTitle": "Sojourner Rover — its final place",
                    "restingDesc": "The small rover remains beside Pathfinder, the first of a line of mobile Mars explorers.",
                    "lastSignal": "Last data received September 27, 1997 — Mission complete",
                    "futureDesc": "Sojourner demonstrated that a remotely operated rover could navigate around rocks, inspect targets and perform surface science on Mars.",
                    "successors": "NASA mission archive"
                }
            },
            spirit: {
                "id": "spirit",
                "name": "Spirit Rover",
                "fullTitle": "Mars Exploration Rover (MER-A)",
                "world": "MARS",
                "worldLabel": "Gusev Crater, Mars",
                "statusType": "INACTIVE",
                "statusText": "Last communication March 22, 2010 — Mission ended",
                "coordinates": "See NASA mission archive",
                "launchDate": "June 10, 2003",
                "landingDate": "January 4, 2004",
                "endDate": "March 22, 2010 (last communication)",
                "plannedSpan": "90 Martian days",
                "actualSpan": "2,208 sols",
                "heroImage": "assets/PIA05590.jpg",
                "heroAlt": "NASA Spirit Mars Exploration Rover on the Martian surface",
                "hubHook": "Spirit was built for a three-month mission. It explored Mars for more than six years, uncovering evidence of ancient water and climbing into the Columbia Hills.",
                "whyStillThere": "Spirit is believed to remain at Troy in Gusev Crater, where it became stuck in soft soil and could no longer position its solar arrays for winter.",
                "mission": {
                    "title": "The Rover That Kept Climbing",
                    "description": "Spirit was one of NASA’s twin Mars Exploration Rovers. It investigated rocks and soils in Gusev Crater, searching for geological evidence of past water and helping establish how diverse Martian environments have been.",
                    "questions": [
                        "What does Gusev Crater reveal about the history of water on Mars?",
                        "How did the rover’s instruments identify minerals altered by water?",
                        "Spirit operated for 2,208 sols, greatly exceeding its 90-sol design mission."
                    ],
                    "milestones": [
                        {
                            "sol": "January 4, 2004",
                            "date": "January 4, 2004",
                            "title": "Spirit lands in Gusev Crater",
                            "desc": "Spirit arrives on Mars and begins exploring a crater selected for signs of ancient water-related geology.",
                            "metric": "Mission duration: 2,208 sols",
                            "image": "assets/PIA05590.jpg"
                        }
                    ]
                },
                "engineering": {
                    "photoUrl": "assets/PIA05590.jpg",
                    "photoCaption": "NASA Spirit Mars Exploration Rover on the Martian surface",
                    "challengeTitle": "Engineering the Spirit Rover",
                    "challengeDesc": "Spirit was one of NASA’s twin Mars Exploration Rovers. It investigated rocks and soils in Gusev Crater, searching for geological evidence of past water and helping establish how diverse Martian environments have been.",
                    "schematicType": "spirit",
                    "hotspots": [
                        {
                            "id": "primary",
                            "x": 50,
                            "y": 48,
                            "rx": 18,
                            "ry": 16,
                            "name": "Rover body and solar deck",
                            "whatItIs": "Main platform containing avionics, batteries and science systems.",
                            "whatItDoes": "Main platform containing avionics, batteries and science systems.",
                            "whyDesigned": "This component was included to support the Spirit Rover mission and its operating environment.",
                            "missionImpact": "Spirit remains on the surface of Gusev Crater, a stationary record of a rover that explored far beyond its planned lifetime."
                        },
                        {
                            "id": "instrument",
                            "x": 28,
                            "y": 62,
                            "rx": 15,
                            "ry": 14,
                            "name": "Rock abrasion tool and instrument turret",
                            "whatItIs": "Contact science tools used to expose and examine rock surfaces.",
                            "whatItDoes": "Contact science tools used to expose and examine rock surfaces.",
                            "whyDesigned": "This component was included to support the Spirit Rover mission and its operating environment.",
                            "missionImpact": "Spirit remains on the surface of Gusev Crater, a stationary record of a rover that explored far beyond its planned lifetime."
                        },
                        {
                            "id": "structure",
                            "x": 50,
                            "y": 18,
                            "rx": 17,
                            "ry": 15,
                            "name": "Mast and panoramic cameras",
                            "whatItIs": "Raised imaging system for navigation and geological observations.",
                            "whatItDoes": "Raised imaging system for navigation and geological observations.",
                            "whyDesigned": "This component was included to support the Spirit Rover mission and its operating environment.",
                            "missionImpact": "Spirit remains on the surface of Gusev Crater, a stationary record of a rover that explored far beyond its planned lifetime."
                        },
                        {
                            "id": "system",
                            "x": 50,
                            "y": 82,
                            "rx": 18,
                            "ry": 16,
                            "name": "Rocker-bogie mobility system",
                            "whatItIs": "Six-wheel suspension designed to traverse uneven Martian terrain.",
                            "whatItDoes": "Six-wheel suspension designed to traverse uneven Martian terrain.",
                            "whyDesigned": "This component was included to support the Spirit Rover mission and its operating environment.",
                            "missionImpact": "Spirit remains on the surface of Gusev Crater, a stationary record of a rover that explored far beyond its planned lifetime."
                        }
                    ]
                },
                "discoveries": {
                    "impactHeadline": "Evidence of water-altered materials",
                    "items": [
                        {
                            "tag": "Mission finding",
                            "title": "Evidence of water-altered materials",
                            "desc": "Spirit found rocks and soils showing evidence of past water activity, including silica-rich deposits and altered materials in the Columbia Hills.",
                            "significance": "Spirit found rocks and soils showing evidence of past water activity, including silica-rich deposits and altered materials in the Columbia Hills.",
                            "image": "assets/PIA05590.jpg",
                            "alt": "NASA Spirit Mars Exploration Rover on the Martian surface"
                        }
                    ],
                    "labType": "spectrometer"
                },
                "legacy": {
                    "restingTitle": "Spirit Rover — its final place",
                    "restingDesc": "Spirit remains on the surface of Gusev Crater, a stationary record of a rover that explored far beyond its planned lifetime.",
                    "lastSignal": "Last communication March 22, 2010 — Mission ended",
                    "futureDesc": "Spirit found rocks and soils showing evidence of past water activity, including silica-rich deposits and altered materials in the Columbia Hills.",
                    "successors": "NASA mission archive"
                }
            },
            viking: {
                "id": "viking",
                "name": "Viking 1 & 2 Landers",
                "fullTitle": "NASA Viking Mars Lander Missions",
                "world": "MARS",
                "worldLabel": "Chryse Planitia and Utopia Planitia, Mars",
                "statusType": "INACTIVE",
                "statusText": "Viking 1 ended 1982; Viking 2 ended 1980",
                "coordinates": "See NASA mission archive",
                "launchDate": "Viking 1: August 20, 1975",
                "landingDate": "Viking 1: July 20, 1976; Viking 2: September 3, 1976",
                "endDate": "Viking 2: April 11, 1980; Viking 1: November 13, 1982",
                "plannedSpan": "Primary missions of a few months",
                "actualSpan": "Both landers operated for years",
                "heroImage": "assets/PIA09703.jpg",
                "heroAlt": "First surface photograph from NASA Viking 1 on Mars",
                "hubHook": "The Viking landers were the first U.S. spacecraft to land successfully on Mars and return images from its surface.",
                "whyStillThere": "Viking 1 rests in Chryse Planitia and Viking 2 in Utopia Planitia; both landers stopped communicating decades ago.",
                "mission": {
                    "title": "The First U.S. Landers to Work on Mars",
                    "description": "Each Viking mission combined an orbiter with a lander. The landers photographed their surroundings, sampled soil, measured weather and ran experiments designed to investigate the possibility of life.",
                    "questions": [
                        "What are the physical and chemical properties of Martian soil?",
                        "Did the Viking biology experiments find evidence of living organisms?",
                        "The experiments produced intriguing chemical reactions but no clear evidence of life."
                    ],
                    "milestones": [
                        {
                            "sol": "July 20, 1976",
                            "date": "July 20, 1976",
                            "title": "Viking 1 touches down",
                            "desc": "Viking 1 lands safely in Chryse Planitia and sends the first photograph from the surface of Mars by a U.S. spacecraft.",
                            "metric": "First U.S. successful Mars landing",
                            "image": "assets/PIA09703.jpg"
                        }
                    ]
                },
                "engineering": {
                    "photoUrl": "assets/PIA09703.jpg",
                    "photoCaption": "First surface photograph from NASA Viking 1 on Mars",
                    "challengeTitle": "Engineering the Viking 1 & 2 Landers",
                    "challengeDesc": "Each Viking mission combined an orbiter with a lander. The landers photographed their surroundings, sampled soil, measured weather and ran experiments designed to investigate the possibility of life.",
                    "schematicType": "viking",
                    "hotspots": [
                        {
                            "id": "primary",
                            "x": 50,
                            "y": 48,
                            "rx": 18,
                            "ry": 16,
                            "name": "Lander body",
                            "whatItIs": "Main platform housing computers, power and science instruments.",
                            "whatItDoes": "Main platform housing computers, power and science instruments.",
                            "whyDesigned": "This component was included to support the Viking 1 & 2 Landers mission and its operating environment.",
                            "missionImpact": "Both Viking landers remain at their landing sites, the first U.S. surface stations on Mars."
                        },
                        {
                            "id": "instrument",
                            "x": 28,
                            "y": 60,
                            "rx": 15,
                            "ry": 14,
                            "name": "Sampler arm",
                            "whatItIs": "Deployable arm that collected surface material for onboard analysis.",
                            "whatItDoes": "Deployable arm that collected surface material for onboard analysis.",
                            "whyDesigned": "This component was included to support the Viking 1 & 2 Landers mission and its operating environment.",
                            "missionImpact": "Both Viking landers remain at their landing sites, the first U.S. surface stations on Mars."
                        },
                        {
                            "id": "structure",
                            "x": 70,
                            "y": 22,
                            "rx": 17,
                            "ry": 15,
                            "name": "Camera system",
                            "whatItIs": "Imaging equipment used to document the landing site and surroundings.",
                            "whatItDoes": "Imaging equipment used to document the landing site and surroundings.",
                            "whyDesigned": "This component was included to support the Viking 1 & 2 Landers mission and its operating environment.",
                            "missionImpact": "Both Viking landers remain at their landing sites, the first U.S. surface stations on Mars."
                        },
                        {
                            "id": "system",
                            "x": 72,
                            "y": 55,
                            "rx": 18,
                            "ry": 16,
                            "name": "Meteorology sensors",
                            "whatItIs": "Instruments that measured local atmospheric conditions.",
                            "whatItDoes": "Instruments that measured local atmospheric conditions.",
                            "whyDesigned": "This component was included to support the Viking 1 & 2 Landers mission and its operating environment.",
                            "missionImpact": "Both Viking landers remain at their landing sites, the first U.S. surface stations on Mars."
                        }
                    ]
                },
                "discoveries": {
                    "impactHeadline": "A detailed first look at the Martian surface",
                    "items": [
                        {
                            "tag": "Mission finding",
                            "title": "A detailed first look at the Martian surface",
                            "desc": "The landers returned surface images, weather observations and soil analyses, establishing a foundation for later Mars exploration.",
                            "significance": "The landers returned surface images, weather observations and soil analyses, establishing a foundation for later Mars exploration.",
                            "image": "assets/PIA09703.jpg",
                            "alt": "First surface photograph from NASA Viking 1 on Mars"
                        }
                    ],
                    "labType": "spectrometer"
                },
                "legacy": {
                    "restingTitle": "Viking 1 & 2 Landers — its final place",
                    "restingDesc": "Both Viking landers remain at their landing sites, the first U.S. surface stations on Mars.",
                    "lastSignal": "Viking 1 ended 1982; Viking 2 ended 1980",
                    "futureDesc": "The landers returned surface images, weather observations and soil analyses, establishing a foundation for later Mars exploration.",
                    "successors": "NASA mission archive"
                }
            },
            phoenix: {
                "id": "phoenix",
                "name": "Phoenix Lander",
                "fullTitle": "Phoenix Mars Scout Lander",
                "world": "MARS",
                "worldLabel": "Green Valley, Vastitas Borealis, Mars",
                "statusType": "INACTIVE",
                "statusText": "Last communication November 2, 2008 — Mission complete",
                "coordinates": "See NASA mission archive",
                "launchDate": "August 4, 2007",
                "landingDate": "May 25, 2008",
                "endDate": "November 2, 2008 (last communication)",
                "plannedSpan": "90 sols",
                "actualSpan": "157 sols",
                "heroImage": "assets/PIA13804.jpg",
                "heroAlt": "NASA Phoenix lander on the Martian arctic plain",
                "hubHook": "Phoenix landed in the Martian north to dig beneath the surface and investigate water ice in the soil.",
                "whyStillThere": "Phoenix remains in the Martian arctic region, where seasonal darkness and cold ended its solar-powered operations.",
                "mission": {
                    "title": "A Lander That Reached for Martian Ice",
                    "description": "Phoenix used a robotic arm to dig trenches and deliver soil samples to onboard instruments. It confirmed water ice beneath the surface and studied the chemistry of the arctic soil.",
                    "questions": [
                        "Is water ice present just below the Martian surface?",
                        "What is the chemistry of the polar soil?",
                        "Phoenix operated for 157 sols, beyond its planned 90-sol mission."
                    ],
                    "milestones": [
                        {
                            "sol": "May 25, 2008",
                            "date": "May 25, 2008",
                            "title": "Phoenix lands in the Martian north",
                            "desc": "Phoenix touches down in the northern plains and begins examining the icy soil around its landing site.",
                            "metric": "Mission duration: 157 sols",
                            "image": "assets/PIA13804.jpg"
                        }
                    ]
                },
                "engineering": {
                    "photoUrl": "assets/PIA13804.jpg",
                    "photoCaption": "NASA Phoenix lander on the Martian arctic plain",
                    "challengeTitle": "Engineering the Phoenix Lander",
                    "challengeDesc": "Phoenix used a robotic arm to dig trenches and deliver soil samples to onboard instruments. It confirmed water ice beneath the surface and studied the chemistry of the arctic soil.",
                    "schematicType": "phoenix",
                    "hotspots": [
                        {
                            "id": "primary",
                            "x": 50,
                            "y": 48,
                            "rx": 18,
                            "ry": 16,
                            "name": "Lander deck",
                            "whatItIs": "Main structure carrying the science instruments and communications systems.",
                            "whatItDoes": "Main structure carrying the science instruments and communications systems.",
                            "whyDesigned": "This component was included to support the Phoenix Lander mission and its operating environment.",
                            "missionImpact": "The lander remains in the polar region, where seasonal conditions eventually prevented it from operating again."
                        },
                        {
                            "id": "instrument",
                            "x": 25,
                            "y": 55,
                            "rx": 15,
                            "ry": 14,
                            "name": "Robotic digging arm",
                            "whatItIs": "Arm used to excavate trenches and deliver soil and ice samples.",
                            "whatItDoes": "Arm used to excavate trenches and deliver soil and ice samples.",
                            "whyDesigned": "This component was included to support the Phoenix Lander mission and its operating environment.",
                            "missionImpact": "The lander remains in the polar region, where seasonal conditions eventually prevented it from operating again."
                        },
                        {
                            "id": "structure",
                            "x": 50,
                            "y": 18,
                            "rx": 17,
                            "ry": 15,
                            "name": "Camera mast",
                            "whatItIs": "Imaging system used to inspect the landing site and excavated material.",
                            "whatItDoes": "Imaging system used to inspect the landing site and excavated material.",
                            "whyDesigned": "This component was included to support the Phoenix Lander mission and its operating environment.",
                            "missionImpact": "The lander remains in the polar region, where seasonal conditions eventually prevented it from operating again."
                        },
                        {
                            "id": "system",
                            "x": 75,
                            "y": 75,
                            "rx": 18,
                            "ry": 16,
                            "name": "Solar arrays and landing supports",
                            "whatItIs": "Power-generating panels and the supporting landing structure.",
                            "whatItDoes": "Power-generating panels and the supporting landing structure.",
                            "whyDesigned": "This component was included to support the Phoenix Lander mission and its operating environment.",
                            "missionImpact": "The lander remains in the polar region, where seasonal conditions eventually prevented it from operating again."
                        }
                    ]
                },
                "discoveries": {
                    "impactHeadline": "Water ice confirmed beneath the surface",
                    "items": [
                        {
                            "tag": "Mission finding",
                            "title": "Water ice confirmed beneath the surface",
                            "desc": "Phoenix exposed bright material that disappeared as it was exposed, and analyses confirmed water ice in the Martian soil.",
                            "significance": "Phoenix exposed bright material that disappeared as it was exposed, and analyses confirmed water ice in the Martian soil.",
                            "image": "assets/PIA13804.jpg",
                            "alt": "NASA Phoenix lander on the Martian arctic plain"
                        }
                    ],
                    "labType": "spectrometer"
                },
                "legacy": {
                    "restingTitle": "Phoenix Lander — its final place",
                    "restingDesc": "The lander remains in the polar region, where seasonal conditions eventually prevented it from operating again.",
                    "lastSignal": "Last communication November 2, 2008 — Mission complete",
                    "futureDesc": "Phoenix exposed bright material that disappeared as it was exposed, and analyses confirmed water ice in the Martian soil.",
                    "successors": "NASA mission archive"
                }
            },
            ingenuity: {
                "id": "ingenuity",
                "name": "Ingenuity Helicopter",
                "fullTitle": "Mars Helicopter Technology Demonstrator",
                "world": "MARS",
                "worldLabel": "Jezero Crater, Mars",
                "statusType": "INACTIVE",
                "statusText": "Flight operations ended January 25, 2024 — Stationary on Mars",
                "coordinates": "See NASA mission archive",
                "launchDate": "July 30, 2020 (with Perseverance)",
                "landingDate": "February 18, 2021 (Mars arrival)",
                "endDate": "January 25, 2024 (final flight)",
                "plannedSpan": "Technology demonstration: up to 5 flights",
                "actualSpan": "72 flights",
                "heroImage": "assets/PIA25881.jpg",
                "heroAlt": "NASA Ingenuity Mars Helicopter on the surface of Mars",
                "hubHook": "A small rotorcraft proved powered, controlled flight was possible in the thin atmosphere of another planet—and flew 72 times.",
                "whyStillThere": "Ingenuity remains at its final location in Jezero Crater after rotor damage during its 72nd flight ended flight operations.",
                "mission": {
                    "title": "The First Aircraft on Another World",
                    "description": "Ingenuity travelled to Mars attached to the Perseverance rover. It was designed as a technology demonstration, then became an aerial scout that helped demonstrate new ways to explore the Martian surface.",
                    "questions": [
                        "Can a rotorcraft generate lift in the thin Martian atmosphere?",
                        "How can aerial images help plan rover routes and identify terrain?",
                        "Ingenuity completed 72 flights, far exceeding its original five-flight goal."
                    ],
                    "milestones": [
                        {
                            "sol": "April 19, 2021",
                            "date": "April 19, 2021",
                            "title": "First powered flight on Mars",
                            "desc": "Ingenuity makes the first powered, controlled flight on another planet, rising above the Martian surface for a brief test.",
                            "metric": "Total flights: 72",
                            "image": "assets/PIA25881.jpg"
                        }
                    ]
                },
                "engineering": {
                    "photoUrl": "assets/PIA25881.jpg",
                    "photoCaption": "NASA Ingenuity Mars Helicopter on the surface of Mars",
                    "challengeTitle": "Engineering the Ingenuity Helicopter",
                    "challengeDesc": "Ingenuity travelled to Mars attached to the Perseverance rover. It was designed as a technology demonstration, then became an aerial scout that helped demonstrate new ways to explore the Martian surface.",
                    "schematicType": "ingenuity",
                    "hotspots": [
                        {
                            "id": "primary",
                            "x": 50,
                            "y": 18,
                            "rx": 18,
                            "ry": 16,
                            "name": "Coaxial rotor system",
                            "whatItIs": "Counter-rotating rotor blades that generated lift in Mars' thin atmosphere.",
                            "whatItDoes": "Counter-rotating rotor blades that generated lift in Mars' thin atmosphere.",
                            "whyDesigned": "This component was included to support the Ingenuity Helicopter mission and its operating environment.",
                            "missionImpact": "After rotor damage during flight 72, Ingenuity was retired and remains on the Martian surface."
                        },
                        {
                            "id": "instrument",
                            "x": 50,
                            "y": 52,
                            "rx": 15,
                            "ry": 14,
                            "name": "Fuselage and avionics",
                            "whatItIs": "Central body containing flight computers, batteries and control electronics.",
                            "whatItDoes": "Central body containing flight computers, batteries and control electronics.",
                            "whyDesigned": "This component was included to support the Ingenuity Helicopter mission and its operating environment.",
                            "missionImpact": "After rotor damage during flight 72, Ingenuity was retired and remains on the Martian surface."
                        },
                        {
                            "id": "structure",
                            "x": 72,
                            "y": 55,
                            "rx": 17,
                            "ry": 15,
                            "name": "Navigation cameras and sensors",
                            "whatItIs": "Imaging and sensing hardware used for autonomous flight.",
                            "whatItDoes": "Imaging and sensing hardware used for autonomous flight.",
                            "whyDesigned": "This component was included to support the Ingenuity Helicopter mission and its operating environment.",
                            "missionImpact": "After rotor damage during flight 72, Ingenuity was retired and remains on the Martian surface."
                        },
                        {
                            "id": "system",
                            "x": 50,
                            "y": 82,
                            "rx": 18,
                            "ry": 16,
                            "name": "Landing legs",
                            "whatItIs": "Lightweight supports that absorbed touchdown loads on the Martian surface.",
                            "whatItDoes": "Lightweight supports that absorbed touchdown loads on the Martian surface.",
                            "whyDesigned": "This component was included to support the Ingenuity Helicopter mission and its operating environment.",
                            "missionImpact": "After rotor damage during flight 72, Ingenuity was retired and remains on the Martian surface."
                        }
                    ]
                },
                "discoveries": {
                    "impactHeadline": "Aerial exploration becomes possible",
                    "items": [
                        {
                            "tag": "Mission finding",
                            "title": "Aerial exploration becomes possible",
                            "desc": "The helicopter demonstrated that powered flight can work in Mars’ thin atmosphere and returned aerial images useful for understanding the terrain.",
                            "significance": "The helicopter demonstrated that powered flight can work in Mars’ thin atmosphere and returned aerial images useful for understanding the terrain.",
                            "image": "assets/PIA25881.jpg",
                            "alt": "NASA Ingenuity Mars Helicopter on the surface of Mars"
                        }
                    ],
                    "labType": "spectrometer"
                },
                "legacy": {
                    "restingTitle": "Ingenuity Helicopter — its final place",
                    "restingDesc": "After rotor damage during flight 72, Ingenuity was retired and remains on the Martian surface.",
                    "lastSignal": "Flight operations ended January 25, 2024 — Stationary on Mars",
                    "futureDesc": "The helicopter demonstrated that powered flight can work in Mars’ thin atmosphere and returned aerial images useful for understanding the terrain.",
                    "successors": "NASA mission archive"
                }
            },
            dawn: {
                "id": "dawn",
                "name": "Dawn Spacecraft",
                "fullTitle": "NASA Dawn Asteroid Belt Mission",
                "world": "BEYOND",
                "worldLabel": "Orbit around Ceres, dwarf planet",
                "statusType": "INACTIVE",
                "statusText": "Mission ended October 31, 2018 — Spacecraft remains in orbit",
                "coordinates": "See NASA mission archive",
                "launchDate": "September 27, 2007",
                "landingDate": "Entered Ceres orbit March 6, 2015",
                "endDate": "October 31, 2018",
                "plannedSpan": "Extended exploration of Vesta and Ceres",
                "actualSpan": "11 years in space",
                "heroImage": "assets/dawn.jpeg",
                "heroAlt": "NASA Dawn spacecraft artist concept exploring the asteroid belt",
                "hubHook": "Powered by an ion propulsion system, Dawn visited two major bodies in the asteroid belt and transformed them from distant points of light into worlds.",
                "whyStillThere": "Dawn remains in an unpowered orbit around Ceres after exhausting its hydrazine fuel.",
                "mission": {
                    "title": "The Long Orbit Around Two Ancient Worlds",
                    "description": "Dawn used solar-electric ion propulsion to explore Vesta and Ceres, the two most massive objects in the main asteroid belt. It became the first spacecraft to orbit two extraterrestrial destinations.",
                    "questions": [
                        "How did Vesta and Ceres preserve clues to the early Solar System?",
                        "What can their geology and composition reveal about planetary formation?",
                        "Dawn’s mission ended when it exhausted the hydrazine needed to point its antennas and solar arrays."
                    ],
                    "milestones": [
                        {
                            "sol": "March 6, 2015",
                            "date": "March 6, 2015",
                            "title": "Dawn arrives at Ceres",
                            "desc": "After exploring Vesta, Dawn enters orbit around Ceres and begins its close-up investigation of the dwarf planet.",
                            "metric": "First spacecraft to orbit two extraterrestrial bodies",
                            "image": "assets/dawn.jpeg"
                        }
                    ]
                },
                "engineering": {
                    "photoUrl": "assets/dawn.jpeg",
                    "photoCaption": "NASA Dawn spacecraft artist concept exploring the asteroid belt",
                    "challengeTitle": "Engineering the Dawn Spacecraft",
                    "challengeDesc": "Dawn used solar-electric ion propulsion to explore Vesta and Ceres, the two most massive objects in the main asteroid belt. It became the first spacecraft to orbit two extraterrestrial destinations.",
                    "schematicType": "dawn",
                    "hotspots": [
                        {
                            "id": "primary",
                            "x": 50,
                            "y": 55,
                            "rx": 18,
                            "ry": 16,
                            "name": "Ion propulsion system",
                            "whatItIs": "Electric propulsion system used for long-duration manoeuvres between Vesta and Ceres.",
                            "whatItDoes": "Electric propulsion system used for long-duration manoeuvres between Vesta and Ceres.",
                            "whyDesigned": "This component was included to support the Dawn Spacecraft mission and its operating environment.",
                            "missionImpact": "Dawn remains in orbit around Ceres, an unpowered artificial satellite of the dwarf planet."
                        },
                        {
                            "id": "instrument",
                            "x": 50,
                            "y": 20,
                            "rx": 15,
                            "ry": 14,
                            "name": "Solar array wings",
                            "whatItIs": "Large panels that generated electrical power for the spacecraft.",
                            "whatItDoes": "Large panels that generated electrical power for the spacecraft.",
                            "whyDesigned": "This component was included to support the Dawn Spacecraft mission and its operating environment.",
                            "missionImpact": "Dawn remains in orbit around Ceres, an unpowered artificial satellite of the dwarf planet."
                        },
                        {
                            "id": "structure",
                            "x": 75,
                            "y": 48,
                            "rx": 17,
                            "ry": 15,
                            "name": "High-gain antenna",
                            "whatItIs": "Communications dish used to send science data to Earth.",
                            "whatItDoes": "Communications dish used to send science data to Earth.",
                            "whyDesigned": "This component was included to support the Dawn Spacecraft mission and its operating environment.",
                            "missionImpact": "Dawn remains in orbit around Ceres, an unpowered artificial satellite of the dwarf planet."
                        },
                        {
                            "id": "system",
                            "x": 50,
                            "y": 75,
                            "rx": 18,
                            "ry": 16,
                            "name": "Science instrument deck",
                            "whatItIs": "Remote-sensing instruments used to map and study the asteroid-belt bodies.",
                            "whatItDoes": "Remote-sensing instruments used to map and study the asteroid-belt bodies.",
                            "whyDesigned": "This component was included to support the Dawn Spacecraft mission and its operating environment.",
                            "missionImpact": "Dawn remains in orbit around Ceres, an unpowered artificial satellite of the dwarf planet."
                        }
                    ]
                },
                "discoveries": {
                    "impactHeadline": "A diverse asteroid belt",
                    "items": [
                        {
                            "tag": "Mission finding",
                            "title": "A diverse asteroid belt",
                            "desc": "Dawn revealed Vesta’s ancient impact history and Ceres’ bright deposits, water-bearing minerals and complex geology.",
                            "significance": "Dawn revealed Vesta’s ancient impact history and Ceres’ bright deposits, water-bearing minerals and complex geology.",
                            "image": "assets/dawn.jpeg",
                            "alt": "NASA Dawn spacecraft artist concept exploring the asteroid belt"
                        }
                    ],
                    "labType": "spectrometer"
                },
                "legacy": {
                    "restingTitle": "Dawn Spacecraft — its final place",
                    "restingDesc": "Dawn remains in orbit around Ceres, an unpowered artificial satellite of the dwarf planet.",
                    "lastSignal": "Mission ended October 31, 2018 — Spacecraft remains in orbit",
                    "futureDesc": "Dawn revealed Vesta’s ancient impact history and Ceres’ bright deposits, water-bearing minerals and complex geology.",
                    "successors": "NASA mission archive"
                }
            },
            near: {
                "id": "near",
                "name": "NEAR Shoemaker",
                "fullTitle": "Near Earth Asteroid Rendezvous (NEAR) Shoemaker",
                "world": "BEYOND",
                "worldLabel": "433 Eros, asteroid",
                "statusType": "INACTIVE",
                "statusText": "Mission ended February 28, 2001 — Resting on Eros",
                "coordinates": "See NASA mission archive",
                "launchDate": "February 17, 1996",
                "landingDate": "Landed on Eros February 12, 2001",
                "endDate": "February 28, 2001 (final contact)",
                "plannedSpan": "Orbital study of asteroid Eros",
                "actualSpan": "More than a year in orbit plus landing",
                "heroImage": "assets/shoemaker.jpeg",
                "heroAlt": "NEAR Shoemaker spacecraft near asteroid Eros",
                "hubHook": "NEAR Shoemaker became the first spacecraft to orbit an asteroid—and then made an unplanned but successful landing on its surface.",
                "whyStillThere": "The spacecraft rests on the surface of asteroid 433 Eros, where it continued returning data after touchdown.",
                "mission": {
                    "title": "The Spacecraft That Came to Rest on an Asteroid",
                    "description": "NEAR Shoemaker studied the near-Earth asteroid Eros, mapping its shape, geology and composition. At the end of its mission, controllers guided it through a controlled descent to the surface.",
                    "questions": [
                        "What is the composition and internal structure of asteroid Eros?",
                        "How do small bodies preserve material from the early Solar System?",
                        "NEAR Shoemaker returned data from the surface after its landing."
                    ],
                    "milestones": [
                        {
                            "sol": "February 12, 2001",
                            "date": "February 12, 2001",
                            "title": "Touchdown on Eros",
                            "desc": "After completing its orbital science, NEAR Shoemaker descends to the asteroid surface in a controlled landing.",
                            "metric": "First spacecraft landing on an asteroid",
                            "image": "assets/shoemaker.jpeg"
                        }
                    ]
                },
                "engineering": {
                    "photoUrl": "assets/shoemaker.jpeg",
                    "photoCaption": "NEAR Shoemaker spacecraft near asteroid Eros",
                    "challengeTitle": "Engineering the NEAR Shoemaker",
                    "challengeDesc": "NEAR Shoemaker studied the near-Earth asteroid Eros, mapping its shape, geology and composition. At the end of its mission, controllers guided it through a controlled descent to the surface.",
                    "schematicType": "near",
                    "hotspots": [
                        {
                            "id": "primary",
                            "x": 50,
                            "y": 48,
                            "rx": 18,
                            "ry": 16,
                            "name": "Spacecraft bus",
                            "whatItIs": "Central structure carrying the spacecraft's systems and instruments.",
                            "whatItDoes": "Central structure carrying the spacecraft's systems and instruments.",
                            "whyDesigned": "This component was included to support the NEAR Shoemaker mission and its operating environment.",
                            "missionImpact": "NEAR Shoemaker remains on Eros, the first spacecraft to land on an asteroid."
                        },
                        {
                            "id": "instrument",
                            "x": 28,
                            "y": 58,
                            "rx": 15,
                            "ry": 14,
                            "name": "X-ray/gamma-ray spectrometer",
                            "whatItIs": "Instrument package used to measure the elemental composition of Eros.",
                            "whatItDoes": "Instrument package used to measure the elemental composition of Eros.",
                            "whyDesigned": "This component was included to support the NEAR Shoemaker mission and its operating environment.",
                            "missionImpact": "NEAR Shoemaker remains on Eros, the first spacecraft to land on an asteroid."
                        },
                        {
                            "id": "structure",
                            "x": 72,
                            "y": 22,
                            "rx": 17,
                            "ry": 15,
                            "name": "Magnetometer and antenna",
                            "whatItIs": "Fields and communications hardware mounted on the spacecraft.",
                            "whatItDoes": "Fields and communications hardware mounted on the spacecraft.",
                            "whyDesigned": "This component was included to support the NEAR Shoemaker mission and its operating environment.",
                            "missionImpact": "NEAR Shoemaker remains on Eros, the first spacecraft to land on an asteroid."
                        },
                        {
                            "id": "system",
                            "x": 50,
                            "y": 82,
                            "rx": 18,
                            "ry": 16,
                            "name": "Solar arrays",
                            "whatItIs": "Panels supplying electrical power during the mission.",
                            "whatItDoes": "Panels supplying electrical power during the mission.",
                            "whyDesigned": "This component was included to support the NEAR Shoemaker mission and its operating environment.",
                            "missionImpact": "NEAR Shoemaker remains on Eros, the first spacecraft to land on an asteroid."
                        }
                    ]
                },
                "discoveries": {
                    "impactHeadline": "A close look at a primitive world",
                    "items": [
                        {
                            "tag": "Mission finding",
                            "title": "A close look at a primitive world",
                            "desc": "The mission mapped Eros and measured its composition, density and surface properties, providing a detailed view of a near-Earth asteroid.",
                            "significance": "The mission mapped Eros and measured its composition, density and surface properties, providing a detailed view of a near-Earth asteroid.",
                            "image": "assets/shoemaker.jpeg",
                            "alt": "NEAR Shoemaker spacecraft near asteroid Eros"
                        }
                    ],
                    "labType": "spectrometer"
                },
                "legacy": {
                    "restingTitle": "NEAR Shoemaker — its final place",
                    "restingDesc": "NEAR Shoemaker remains on Eros, the first spacecraft to land on an asteroid.",
                    "lastSignal": "Mission ended February 28, 2001 — Resting on Eros",
                    "futureDesc": "The mission mapped Eros and measured its composition, density and surface properties, providing a detailed view of a near-Earth asteroid.",
                    "successors": "NASA mission archive"
                }
            },
            pioneer: {
                "id": "pioneer",
                "name": "Pioneer 10 & 11",
                "fullTitle": "NASA Pioneer Outer-Planet Probes",
                "world": "BEYOND",
                "worldLabel": "Interstellar space / beyond the outer planets",
                "statusType": "INACTIVE",
                "statusText": "Communications ended — Both spacecraft continue on solar-system escape trajectories",
                "coordinates": "See NASA mission archive",
                "launchDate": "Pioneer 10: March 2, 1972; Pioneer 11: April 5, 1973",
                "landingDate": "No planetary landing",
                "endDate": "Pioneer 10: last signal January 2003; Pioneer 11: last contact September 1995",
                "plannedSpan": "Outer-planet reconnaissance",
                "actualSpan": "Decades of flight beyond primary missions",
                "heroImage": "assets/pioneer-10.jpeg",
                "heroAlt": "Pioneer spacecraft artist concept in deep space",
                "hubHook": "The Pioneer probes opened the outer Solar System to close exploration. Long after their encounters with the giant planets, they continued outward into deep space.",
                "whyStillThere": "Both spacecraft are unpowered and moving on escape trajectories away from the Sun; neither is a surface artifact.",
                "mission": {
                    "title": "The First Messengers to the Outer Planets",
                    "description": "Pioneer 10 flew past Jupiter and Pioneer 11 visited Jupiter and Saturn. Their measurements and images helped prepare the way for later outer-planet missions.",
                    "questions": [
                        "What are the radiation environment and magnetic fields around the giant planets?",
                        "How can a spacecraft navigate and communicate across the outer Solar System?",
                        "Pioneer 10 and 11 are still travelling, but no longer communicate with Earth."
                    ],
                    "milestones": [
                        {
                            "sol": "December 3, 1973",
                            "date": "December 3, 1973",
                            "title": "Pioneer 10 flies past Jupiter",
                            "desc": "Pioneer 10 makes the first close-up exploration of Jupiter, returning measurements and images from the giant planet.",
                            "metric": "First spacecraft to fly past Jupiter",
                            "image": "assets/pioneer-10.jpeg"
                        }
                    ]
                },
                "engineering": {
                    "photoUrl": "assets/pioneer-10.jpeg",
                    "photoCaption": "Pioneer spacecraft artist concept in deep space",
                    "challengeTitle": "Engineering the Pioneer 10 & 11",
                    "challengeDesc": "Pioneer 10 flew past Jupiter and Pioneer 11 visited Jupiter and Saturn. Their measurements and images helped prepare the way for later outer-planet missions.",
                    "schematicType": "pioneer",
                    "hotspots": [
                        {
                            "id": "primary",
                            "x": 50,
                            "y": 25,
                            "rx": 18,
                            "ry": 16,
                            "name": "High-gain antenna",
                            "whatItIs": "Large dish antenna used for long-distance communication with Earth.",
                            "whatItDoes": "Large dish antenna used for long-distance communication with Earth.",
                            "whyDesigned": "This component was included to support the Pioneer 10 & 11 mission and its operating environment.",
                            "missionImpact": "The probes continue drifting outward, carrying their plaques as silent records of Earth."
                        },
                        {
                            "id": "instrument",
                            "x": 25,
                            "y": 45,
                            "rx": 15,
                            "ry": 14,
                            "name": "Magnetometer boom",
                            "whatItIs": "Extended boom that carried magnetic-field sensors away from spacecraft interference.",
                            "whatItDoes": "Extended boom that carried magnetic-field sensors away from spacecraft interference.",
                            "whyDesigned": "This component was included to support the Pioneer 10 & 11 mission and its operating environment.",
                            "missionImpact": "The probes continue drifting outward, carrying their plaques as silent records of Earth."
                        },
                        {
                            "id": "structure",
                            "x": 75,
                            "y": 55,
                            "rx": 17,
                            "ry": 15,
                            "name": "Plasma analyser",
                            "whatItIs": "Instrument for sampling charged particles in the solar wind and planetary environments.",
                            "whatItDoes": "Instrument for sampling charged particles in the solar wind and planetary environments.",
                            "whyDesigned": "This component was included to support the Pioneer 10 & 11 mission and its operating environment.",
                            "missionImpact": "The probes continue drifting outward, carrying their plaques as silent records of Earth."
                        },
                        {
                            "id": "system",
                            "x": 50,
                            "y": 75,
                            "rx": 18,
                            "ry": 16,
                            "name": "Pioneer plaque",
                            "whatItIs": "Engraved message plate carried by the spacecraft as a record of humanity.",
                            "whatItDoes": "Engraved message plate carried by the spacecraft as a record of humanity.",
                            "whyDesigned": "This component was included to support the Pioneer 10 & 11 mission and its operating environment.",
                            "missionImpact": "The probes continue drifting outward, carrying their plaques as silent records of Earth."
                        }
                    ]
                },
                "discoveries": {
                    "impactHeadline": "The outer Solar System becomes reachable",
                    "items": [
                        {
                            "tag": "Mission finding",
                            "title": "The outer Solar System becomes reachable",
                            "desc": "The Pioneer missions returned the first close-up data from Jupiter and Saturn and helped establish the conditions future spacecraft would encounter.",
                            "significance": "The Pioneer missions returned the first close-up data from Jupiter and Saturn and helped establish the conditions future spacecraft would encounter.",
                            "image": "assets/pioneer-10.jpeg",
                            "alt": "Pioneer spacecraft artist concept in deep space"
                        }
                    ],
                    "labType": "spectrometer"
                },
                "legacy": {
                    "restingTitle": "Pioneer 10 & 11 — its final place",
                    "restingDesc": "The probes continue drifting outward, carrying their plaques as silent records of Earth.",
                    "lastSignal": "Communications ended — Both spacecraft continue on solar-system escape trajectories",
                    "futureDesc": "The Pioneer missions returned the first close-up data from Jupiter and Saturn and helped establish the conditions future spacecraft would encounter.",
                    "successors": "NASA mission archive"
                }
            },
            kepler: {
                "id": "kepler",
                "name": "Kepler Space Telescope",
                "fullTitle": "NASA Kepler Space Telescope",
                "world": "BEYOND",
                "worldLabel": "Earth-trailing heliocentric orbit",
                "statusType": "INACTIVE",
                "statusText": "Mission ended October 30, 2018 — Space telescope retired",
                "coordinates": "See NASA mission archive",
                "launchDate": "March 7, 2009",
                "landingDate": "No landing; heliocentric orbit",
                "endDate": "October 30, 2018",
                "plannedSpan": "3.5 years",
                "actualSpan": "9 years, 7 months",
                "heroImage": "https://images-assets.nasa.gov/image/PIA11825/PIA11825~orig.jpg",
                "heroAlt": "NASA Kepler space telescope in orbit, artist concept",
                "hubHook": "Kepler watched a single field of stars for years, detecting tiny dips in starlight that revealed planets crossing in front of their stars.",
                "whyStillThere": "Kepler remains in an Earth-trailing orbit around the Sun after its fuel supply was exhausted.",
                "mission": {
                    "title": "The Telescope That Counted Other Worlds",
                    "description": "Kepler used the transit method to find exoplanets by measuring small, repeated decreases in a star’s brightness as planets passed in front of it.",
                    "questions": [
                        "How common are planets around other stars?",
                        "What range of planetary sizes and orbital periods exists in the galaxy?",
                        "Kepler’s extended K2 mission continued after the original reaction wheels failed."
                    ],
                    "milestones": [
                        {
                            "sol": "May 2009",
                            "date": "May 2009",
                            "title": "Science observations begin",
                            "desc": "Kepler begins monitoring a field of stars to detect the tiny brightness changes caused by transiting planets.",
                            "metric": "More than 2,600 confirmed exoplanets discovered",
                            "image": "https://images-assets.nasa.gov/image/PIA11825/PIA11825~orig.jpg"
                        }
                    ]
                },
                "engineering": {
                    "photoUrl": "https://images-assets.nasa.gov/image/PIA11825/PIA11825~orig.jpg",
                    "photoCaption": "NASA Kepler space telescope in orbit, artist concept",
                    "challengeTitle": "Engineering the Kepler Space Telescope",
                    "challengeDesc": "Kepler used the transit method to find exoplanets by measuring small, repeated decreases in a star’s brightness as planets passed in front of it.",
                    "schematicType": "kepler",
                    "hotspots": [
                        {
                            "id": "primary",
                            "x": 50,
                            "y": 50,
                            "rx": 18,
                            "ry": 16,
                            "name": "Photometer and telescope aperture",
                            "whatItIs": "Optical system that continuously monitored stellar brightness.",
                            "whatItDoes": "Optical system that continuously monitored stellar brightness.",
                            "whyDesigned": "This component was included to support the Kepler Space Telescope mission and its operating environment.",
                            "missionImpact": "The retired telescope continues along its Earth-trailing orbit, its observations reshaping the search for planets beyond the Solar System."
                        },
                        {
                            "id": "instrument",
                            "x": 50,
                            "y": 35,
                            "rx": 15,
                            "ry": 14,
                            "name": "Primary mirror and focal plane",
                            "whatItIs": "Optical assembly directing starlight to the detector array.",
                            "whatItDoes": "Optical assembly directing starlight to the detector array.",
                            "whyDesigned": "This component was included to support the Kepler Space Telescope mission and its operating environment.",
                            "missionImpact": "The retired telescope continues along its Earth-trailing orbit, its observations reshaping the search for planets beyond the Solar System."
                        },
                        {
                            "id": "structure",
                            "x": 50,
                            "y": 82,
                            "rx": 17,
                            "ry": 15,
                            "name": "Solar panels",
                            "whatItIs": "Power system supplying the spacecraft during its mission.",
                            "whatItDoes": "Power system supplying the spacecraft during its mission.",
                            "whyDesigned": "This component was included to support the Kepler Space Telescope mission and its operating environment.",
                            "missionImpact": "The retired telescope continues along its Earth-trailing orbit, its observations reshaping the search for planets beyond the Solar System."
                        },
                        {
                            "id": "system",
                            "x": 75,
                            "y": 22,
                            "rx": 18,
                            "ry": 16,
                            "name": "Communications antenna",
                            "whatItIs": "Radio hardware used to transmit observations and spacecraft status.",
                            "whatItDoes": "Radio hardware used to transmit observations and spacecraft status.",
                            "whyDesigned": "This component was included to support the Kepler Space Telescope mission and its operating environment.",
                            "missionImpact": "The retired telescope continues along its Earth-trailing orbit, its observations reshaping the search for planets beyond the Solar System."
                        }
                    ]
                },
                "discoveries": {
                    "impactHeadline": "Thousands of worlds beyond our Solar System",
                    "items": [
                        {
                            "tag": "Mission finding",
                            "title": "Thousands of worlds beyond our Solar System",
                            "desc": "Kepler showed that planets are common in the Milky Way and found a wide range of planetary systems, including many unlike our own.",
                            "significance": "Kepler showed that planets are common in the Milky Way and found a wide range of planetary systems, including many unlike our own.",
                            "image": "https://images-assets.nasa.gov/image/PIA11825/PIA11825~orig.jpg",
                            "alt": "NASA Kepler space telescope in orbit, artist concept"
                        }
                    ],
                    "labType": "spectrometer"
                },
                "legacy": {
                    "restingTitle": "Kepler Space Telescope — its final place",
                    "restingDesc": "The retired telescope continues along its Earth-trailing orbit, its observations reshaping the search for planets beyond the Solar System.",
                    "lastSignal": "Mission ended October 30, 2018 — Space telescope retired",
                    "futureDesc": "Kepler showed that planets are common in the Milky Way and found a wide range of planetary systems, including many unlike our own.",
                    "successors": "NASA mission archive"
                }
            },
        };

        /**
         * DOCUMENTARY APPLICATION CONTROLLER
         */
        const app = {
            currentChapter: 0,
            activeExplorerId: 'opportunity',
            activeMilestoneIndex: 0,
            activeHotspotIndex: 0,
            engineeringViewMode: 'photo', // 'photo' | 'diagram'
            hubFilter: 'ALL',
            audioEnabled: false,
            synth: null,
            scrollObserver: null,
            activeMineralSample: 'hematite',
            activeSeismicEvent: 's1222a',
            seismicAnimFrame: null,
            laserInFlight: false,

            init() {
                this.loadToneLibrary(); // Preload the audio engine; sound remains off until the visitor enables it.
                this.initCosmosCanvas();
                this.initScrollRevealObserver();
                this.initScrollAndParallaxEffects();
                this.renderHubShowcases();
                this.loadExplorerStory();
                this.updateNavigationState();
                this.updateAtmosphericTint();
                this.updateReadingProgress();

                window.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') this.toggleSourcesModal(false);
                });
            },

            // Subtle Scroll Parallax & Reading Progress Bar
            initScrollAndParallaxEffects() {
                let ticking = false;
                window.addEventListener('scroll', () => {
                    if (!ticking) {
                        window.requestAnimationFrame(() => {
                            this.updateReadingProgress();
                            this.applySubtleParallax();
                            ticking = false;
                        });
                        ticking = true;
                    }
                }, { passive: true });
            },

            updateReadingProgress() {
                const bar = document.getElementById('reading-progress-bar');
                if (!bar) return;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollFraction = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;
                const chapterWeight = (this.currentChapter / 5) * 75;
                const scrollWeight = scrollFraction * 25;
                bar.style.width = `${Math.min(100, Math.max(6, chapterWeight + scrollWeight))}%`;
            },

            applySubtleParallax() {
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                const scrollY = window.scrollY;
                document.querySelectorAll('[data-parallax]').forEach(el => {
                    const speed = parseFloat(el.getAttribute('data-parallax') || '0.06');
                    const rect = el.getBoundingClientRect();
                    if (rect.bottom > 0 && rect.top < window.innerHeight) {
                        const offset = (rect.top - window.innerHeight * 0.5) * speed;
                        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.06)`;
                    }
                });
            },

            // Smooth Crossfade Chapter Navigation
            navigateToChapter(chapterNum) {
                if (chapterNum < 0 || chapterNum > 5) return;
                const stage = document.getElementById('main-stage');
                stage.classList.add('stage-fading');
                this.playAmbientNote(chapterNum === 0 ? 'C4' : 'G4');

                setTimeout(() => {
                    this.currentChapter = chapterNum;
                    for (let i = 0; i <= 5; i++) {
                        const sec = document.getElementById(`chapter-${i}`);
                        if (sec) {
                            sec.classList.toggle('hidden', i !== chapterNum);
                        }
                    }

                    if (chapterNum >= 2 && chapterNum <= 5) {
                        this.loadExplorerStory();
                    }

                    this.updateNavigationState();
                    this.updateAtmosphericTint();
                    window.scrollTo({ top: 0, behavior: 'instant' });
                    this.updateReadingProgress();

                    stage.classList.remove('stage-fading');
                    this.observeScrollElements();
                }, 280);
            },

            // Select an explorer and transition into its narrative
            selectExplorer(explorerId, targetChapter = 2) {
                if (!EXPLORERS_DATA[explorerId]) return;
                this.activeExplorerId = explorerId;
                this.activeMilestoneIndex = 0;
                this.activeHotspotIndex = 0;
                this.engineeringViewMode = 'photo';
                this.navigateToChapter(targetChapter);
            },

            // Shift subtle atmospheric glow based on Moon vs Mars
            updateAtmosphericTint() {
                const root = document.documentElement;
                if (this.currentChapter === 0) {
                    root.style.setProperty('--atmosphere-glow', 'rgba(125, 211, 252, 0.06)');
                    return;
                }
                if (this.currentChapter === 1) {
                    if (this.hubFilter === 'MARS') {
                        root.style.setProperty('--atmosphere-glow', 'rgba(200, 125, 101, 0.09)');
                    } else if (this.hubFilter === 'MOON') {
                        root.style.setProperty('--atmosphere-glow', 'rgba(214, 217, 223, 0.08)');
                    } else {
                        root.style.setProperty('--atmosphere-glow', 'rgba(125, 211, 252, 0.06)');
                    }
                    return;
                }
                const ex = EXPLORERS_DATA[this.activeExplorerId];
                if (ex.world === 'MARS') {
                    root.style.setProperty('--atmosphere-glow', 'rgba(200, 125, 101, 0.10)');
                } else {
                    root.style.setProperty('--atmosphere-glow', 'rgba(214, 217, 223, 0.09)');
                }
            },

            // Update Minimal Floating Header
            updateNavigationState() {
                const ex = EXPLORERS_DATA[this.activeExplorerId];

                document.querySelectorAll('[data-nav-chapter]').forEach(btn => {
                    const ch = parseInt(btn.getAttribute('data-nav-chapter'), 10);
                    if (ch === this.currentChapter) {
                        btn.className = 'nav-link text-xs tracking-wide transition-colors py-1 text-white font-medium border-b border-sky-300';
                    } else {
                        btn.className = 'nav-link text-xs tracking-wide transition-colors py-1 text-stone-400 hover:text-stone-200';
                    }
                });

                document.querySelectorAll('[data-nav-chapter-mobile]').forEach(btn => {
                    const ch = parseInt(btn.getAttribute('data-nav-chapter-mobile'), 10);
                    if (ch === this.currentChapter) {
                        btn.className = 'text-xs whitespace-nowrap transition-colors text-sky-300 font-semibold';
                    } else {
                        btn.className = 'text-xs whitespace-nowrap transition-colors text-stone-400';
                    }
                });

                const badge = document.getElementById('active-explorer-badge');
                const badgeName = document.getElementById('badge-name');
                const badgeDot = document.getElementById('badge-dot');
                if (this.currentChapter >= 2) {
                    badge.classList.remove('hidden');
                    badge.classList.add('flex');
                    badgeName.textContent = ex.name;
                    badgeDot.className = `w-2 h-2 rounded-full ${ex.world === 'MARS' ? 'bg-martian' : 'bg-lunar'}`;
                } else {
                    badge.classList.add('hidden');
                }
            },

            // Filter Chapter 01 Discovery Hub
            filterHub(worldFilter) {
                this.hubFilter = worldFilter;
                this.playAmbientNote('E4');
                this.updateAtmosphericTint();

                document.querySelectorAll('.hub-filter-btn').forEach(btn => {
                    const f = btn.getAttribute('data-filter');
                    if (f === worldFilter) {
                        btn.className = 'hub-filter-btn px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all bg-white text-obsidian flex items-center gap-2';
                    } else {
                        btn.className = 'hub-filter-btn px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all bg-white/[0.06] text-stone-300 hover:text-white flex items-center gap-2';
                    }
                });

                this.renderHubShowcases();
                this.observeScrollElements();
            },

            // Render Immersive Full-Width Explorer Showcases in Chapter 01
            renderHubShowcases() {
                const container = document.getElementById('hub-showcase-list');
                if (!container) return;

                const groups = [
                    { key: 'MOON', title: 'The Moon', intro: 'Machines and instruments left across the lunar surface.' },
                    { key: 'MARS', title: 'Mars', intro: 'The landers, rovers and aircraft that explored the Red Planet.' },
                    { key: 'BEYOND', title: 'Beyond the World', intro: 'Spacecraft that continue their journeys or rest beyond the terrestrial worlds.' }
                ];
                const visibleGroups = groups.filter(group =>
                    this.hubFilter === 'ALL' || this.hubFilter === group.key
                );

                container.innerHTML = visibleGroups.map(group => {
                    const list = Object.values(EXPLORERS_DATA).filter(item => item.world === group.key);
                    if (!list.length) return '';
                    return `
                        <section class="space-y-8" aria-labelledby="group-${group.key.toLowerCase()}">
                            <header class="space-y-2 pt-4">
                                <p class="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">Archive group</p>
                                <h3 id="group-${group.key.toLowerCase()}" class="font-display text-3xl sm:text-4xl font-bold text-white">${group.title}</h3>
                                <p class="text-sm sm:text-base text-stone-400 font-light">${group.intro}</p>
                            </header>
                            <div class="space-y-16">
                                ${list.map((ex, index) => {
                                    const isOp = ex.statusType === 'OPERATIONAL';
                                    const statusDot = isOp ? 'bg-emerald-400' : 'bg-martian';
                                    return `
                                        <article class="reveal-on-scroll group relative rounded-3xl overflow-hidden bg-charcoal grid grid-cols-1 lg:grid-cols-12 items-stretch">
                                            <div class="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] overflow-hidden bg-obsidian ${index % 2 === 1 ? 'lg:order-2' : ''}">
                                                <img src="${ex.heroImage}" alt="${ex.heroAlt}" loading="lazy" class="w-full h-full object-cover opacity-90 ken-burns ken-burns-hover">
                                                <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent lg:hidden"></div>
                                            </div>
                                            <div class="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}">
                                                <div class="space-y-4">
                                                    <div class="flex items-center gap-3 text-xs text-stone-400">
                                                        <span class="font-mono uppercase tracking-widest text-sky-300">${ex.worldLabel}</span>
                                                    </div>
                                                    <h3 class="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">${ex.name}</h3>
                                                    <p class="text-xs font-mono text-stone-400">${ex.fullTitle}</p>
                                                    <p class="text-base sm:text-lg text-stone-300 font-light leading-relaxed pt-2">${ex.hubHook}</p>
                                                    <p class="text-sm text-stone-400 font-light leading-relaxed pt-2"><strong class="text-stone-200 font-medium">Where it is today:</strong> ${ex.whyStillThere}</p>
                                                </div>
                                                <div class="space-y-6 pt-4 border-t border-white/10">
                                                    <div class="flex items-center gap-2.5 text-xs text-stone-300">
                                                        <span class="w-2 h-2 rounded-full ${statusDot}"></span>
                                                        <span>${ex.statusText}</span>
                                                    </div>
                                                    <button onclick="app.selectExplorer('${ex.id}', 2)" class="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-sky-300 text-obsidian font-display font-bold text-sm tracking-wide transition-all inline-flex items-center justify-center gap-3">
                                                        <span>Explore ${ex.name}’s Story</span><span>&rarr;</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </article>
                                    `;
                                }).join('')}
                            </div>
                        </section>
                    `;
                }).join('');
                this.observeScrollElements();
            },

            // Shared Editorial Story Switcher Bar for Chapters 02-05
            buildExplorerSwitcherBar(chapterNum) {
                const ex = EXPLORERS_DATA[this.activeExplorerId];
                return Object.values(EXPLORERS_DATA).map(item => {
                    const active = item.id === ex.id;
                    return `
                        <button onclick="app.selectExplorer('${item.id}', ${chapterNum})" 
                                class="px-4 py-1.5 rounded-full text-xs font-medium transition-all ${active ? 'bg-white text-obsidian' : 'bg-white/[0.07] text-stone-300 hover:bg-white/[0.15] hover:text-white'}">
                            ${item.name}
                        </button>
                    `;
                }).join('');
            },

            // Populate Chapters 02, 03, 04, 05 for the selected explorer
            loadExplorerStory() {
                const ex = EXPLORERS_DATA[this.activeExplorerId];

                // ==========================================
                // CHAPTER 02: THE MISSION
                // ==========================================
                document.getElementById('ch2-hero').innerHTML = `
                    <div class="absolute inset-0 z-0 overflow-hidden">
                        <img src="${ex.heroImage}" alt="${ex.heroAlt}" data-parallax="0.1" class="parallax-media w-full h-full object-cover opacity-40 scale-105">
                        <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/30"></div>
                    </div>
                    <div class="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div class="space-y-4 max-w-3xl">
                            <p class="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">
                                Chapter 02 &mdash; The Mission &bull; ${ex.worldLabel}
                            </p>
                            <h2 class="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.08]">
                                ${ex.name}: ${ex.mission.title}
                            </h2>
                        </div>
                        <div class="flex flex-wrap items-center gap-2">
                            ${this.buildExplorerSwitcherBar(2)}
                        </div>
                    </div>
                `;

                document.getElementById('ch2-objective-title').textContent = ex.mission.title;
                document.getElementById('ch2-objective-desc').textContent = ex.mission.description;
                document.getElementById('ch2-questions-list').innerHTML = ex.mission.questions.map(q => `
                    <li class="flex items-start gap-3">
                        <span class="text-sky-300 mt-1">&mdash;</span>
                        <span>${q}</span>
                    </li>
                `).join('');
                document.getElementById('ch2-planned-span').textContent = ex.plannedSpan;
                document.getElementById('ch2-actual-span').textContent = ex.actualSpan;
                this.renderMissionMilestone(this.activeMilestoneIndex);

                // ==========================================
                // CHAPTER 03: THE ENGINEERING
                // ==========================================
                document.getElementById('ch3-header').innerHTML = `
                    <div class="flex flex-wrap items-center justify-between gap-4">
                        <p class="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">
                            Chapter 03 &mdash; The Engineering &bull; ${ex.name}
                        </p>
                        <div class="flex flex-wrap gap-2">
                            ${this.buildExplorerSwitcherBar(3)}
                        </div>
                    </div>
                    <h2 class="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                        Built to Survive Another World
                    </h2>
                    <p class="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
                        Every instrument on ${ex.name} was shaped by the harsh realities of ${ex.worldLabel}. Explore the photograph below to discover how its components worked together.
                    </p>
                `;
                document.getElementById('ch3-challenge-title').textContent = ex.engineering.challengeTitle;
                document.getElementById('ch3-challenge-desc').textContent = ex.engineering.challengeDesc;
                this.renderEngineeringStage();
                this.selectHotspot(this.activeHotspotIndex, false);

                // ==========================================
                // CHAPTER 04: THE DISCOVERIES
                // ==========================================
                document.getElementById('ch4-header').innerHTML = `
                    <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <p class="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">
                            Chapter 04 &mdash; The Discoveries &bull; ${ex.name}
                        </p>
                        <div class="flex flex-wrap gap-2">
                            ${this.buildExplorerSwitcherBar(4)}
                        </div>
                    </div>
                    <h2 class="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                        How ${ex.name} Changed Our Understanding
                    </h2>
                `;
                document.getElementById('ch4-summary-impact').textContent = ex.discoveries.impactHeadline;

                document.getElementById('ch4-discoveries-essays').innerHTML = ex.discoveries.items.map((item, idx) => `
                    <article class="reveal-on-scroll group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        <div class="lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}">
                            <figure class="rounded-3xl overflow-hidden bg-charcoal">
                                <img src="${item.image}" 
                                     alt="${item.alt}" 
                                     class="w-full h-80 sm:h-[420px] object-cover ken-burns ken-burns-hover">
                            </figure>
                        </div>
                        <div class="lg:col-span-5 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}">
                            <span class="font-mono text-xs text-sky-300 uppercase tracking-widest block">
                                ${item.tag}
                            </span>
                            <h3 class="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
                                ${item.title}
                            </h3>
                            <p class="text-base text-stone-300 font-light leading-relaxed">
                                ${item.desc}
                            </p>
                            <div class="pt-4 border-t border-white/10">
                                <span class="text-xs font-mono uppercase text-stone-400 block mb-1">Why It Mattered</span>
                                <p class="text-sm text-stone-200 leading-relaxed">${item.significance}</p>
                            </div>
                        </div>
                    </article>
                `).join('');

                this.renderInteractiveDiscoveryExperience(ex.discoveries.labType);

                // ==========================================
                // CHAPTER 05: THE LEGACY
                // ==========================================
                document.getElementById('ch5-hero').innerHTML = `
                    <div class="absolute inset-0 z-0 overflow-hidden">
                        <img src="${ex.heroImage}" alt="${ex.heroAlt}" data-parallax="0.1" class="parallax-media w-full h-full object-cover opacity-35 scale-105">
                        <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/30"></div>
                    </div>
                    <div class="relative z-10 max-w-5xl mx-auto w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div class="space-y-4">
                            <p class="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">
                                Chapter 05 &mdash; The Legacy &bull; ${ex.coordinates}
                            </p>
                            <h2 class="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight">
                                ${ex.legacy.restingTitle}
                            </h2>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            ${this.buildExplorerSwitcherBar(5)}
                        </div>
                    </div>
                `;

                document.getElementById('ch5-resting-title').textContent = ex.legacy.restingTitle;
                document.getElementById('ch5-resting-desc').textContent = ex.legacy.restingDesc;
                document.getElementById('ch5-last-signal').textContent = ex.legacy.lastSignal;
                document.getElementById('ch5-future-desc').textContent = ex.legacy.futureDesc;
                document.getElementById('ch5-successors').textContent = ex.legacy.successors;

                // document.getElementById('ch5-other-explorers').innerHTML = Object.values(EXPLORERS_DATA)
                //     .filter(item => item.id !== ex.id)
                //     .map(item => `
                //         <button onclick="app.selectExplorer('${item.id}', 2)" class="px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-sky-300 hover:text-obsidian text-xs font-medium text-white transition-all">
                //             Discover ${item.name} &rarr;
                //         </button>
                //     `).join('');
            },

            // Render Progressive Photographic Timeline in Chapter 02
            renderMissionMilestone(index, animateTransition = false) {
                const ex = EXPLORERS_DATA[this.activeExplorerId];
                this.activeMilestoneIndex = index;
                const ms = ex.mission.milestones[index];

                // Update animated progress bar along timeline track
                const prog = document.getElementById('ch2-timeline-progress');
                if (prog) {
                    const pct = ((index + 0.5) / ex.mission.milestones.length) * 100;
                    prog.style.width = `${pct}%`;
                }

                const track = document.getElementById('ch2-timeline-track');
                track.innerHTML = ex.mission.milestones.map((m, idx) => {
                    const isActive = idx === index;
                    const isPast = idx < index;
                    return `
                        <button onclick="app.selectMilestone(${idx})" 
                                role="tab" 
                                aria-selected="${isActive}"
                                class="p-4 rounded-2xl text-left transition-all duration-300 ${isActive ? 'bg-white text-obsidian shadow-xl -translate-y-0.5' : isPast ? 'bg-charcoal text-stone-200 border border-sky-300/25 hover:bg-white/[0.08]' : 'bg-charcoal/90 text-stone-300 hover:bg-white/[0.08]'}">
                            <span class="font-mono text-[11px] block ${isActive ? 'text-stone-600' : 'text-sky-300'}">${m.sol}</span>
                            <span class="font-display font-bold text-sm line-clamp-1 mt-1">${m.title}</span>
                        </button>
                    `;
                }).join('');

                const stage = document.getElementById('ch2-milestone-stage');
                const updateStageHtml = () => {
                    stage.innerHTML = `
                        <div class="lg:col-span-6 h-72 sm:h-96 bg-obsidian overflow-hidden">
                            <img src="${ms.image}" alt="${ms.title}" class="w-full h-full object-cover ken-burns hover:scale-105 transition-transform duration-1000">
                        </div>
                        <div class="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                            <div class="space-y-4">
                                <div class="flex items-center justify-between text-xs font-mono text-sky-300">
                                    <span>${ms.sol} &mdash; ${ms.date}</span>
                                    <span class="text-stone-400">Moment 0${index + 1} of 0${ex.mission.milestones.length}</span>
                                </div>
                                <h4 class="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
                                    ${ms.title}
                                </h4>
                                <p class="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
                                    ${ms.desc}
                                </p>
                            </div>

                            <div class="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                                <span class="font-mono text-xs text-stone-400">${ms.metric}</span>
                                <div class="flex items-center gap-4 text-xs font-medium">
                                    <button onclick="app.selectMilestone(${Math.max(0, index - 1)})" ${index === 0 ? 'disabled class="opacity-30 cursor-not-allowed"' : 'class="text-stone-300 hover:text-white transition-colors"'}>
                                        &larr; Previous
                                    </button>
                                    <button onclick="app.selectMilestone(${Math.min(ex.mission.milestones.length - 1, index + 1)})" ${index === ex.mission.milestones.length - 1 ? 'disabled class="opacity-30 cursor-not-allowed"' : 'class="text-sky-300 hover:text-white transition-colors"'}>
                                        Next Moment &rarr;
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                };

                if (animateTransition) {
                    stage.classList.add('panel-fading');
                    setTimeout(() => {
                        updateStageHtml();
                        stage.classList.remove('panel-fading');
                    }, 190);
                } else {
                    updateStageHtml();
                }
            },

            selectMilestone(index) {
                if (index === this.activeMilestoneIndex) return;
                this.playAmbientNote('F4');
                this.renderMissionMilestone(index, true);
            },

            selectMilestone(index) {
                this.playAmbientNote('F4');
                this.renderMissionMilestone(index);
            },

            // Switch between Authentic NASA Photo and Clean Structural Diagram in Chapter 03
            setEngineeringViewMode(mode) {
                this.engineeringViewMode = mode;
                this.playAmbientNote('E4');

                const btnPhoto = document.getElementById('btn-view-photo');
                const btnDiagram = document.getElementById('btn-view-diagram');
                if (mode === 'photo') {
                    btnPhoto.className = 'px-3.5 py-1 rounded-full text-xs font-medium bg-white text-obsidian transition-all';
                    btnDiagram.className = 'px-3.5 py-1 rounded-full text-xs font-medium text-stone-300 hover:text-white transition-all';
                } else {
                    btnDiagram.className = 'px-3.5 py-1 rounded-full text-xs font-medium bg-white text-obsidian transition-all';
                    btnPhoto.className = 'px-3.5 py-1 rounded-full text-xs font-medium text-stone-300 hover:text-white transition-all';
                }
                this.renderEngineeringStage();
            },

            // Render Chapter 03 Interactive Photograph or Structural Diagram
            renderEngineeringStage() {
                const ex = EXPLORERS_DATA[this.activeExplorerId];
                const stage = document.getElementById('ch3-visual-stage');
                const pills = document.getElementById('ch3-component-pills');
                const activeH = ex.engineering.hotspots[this.activeHotspotIndex];
                const idxActive = this.activeHotspotIndex;

                let backdropHtml = '';
                if (this.engineeringViewMode === 'photo') {
                    backdropHtml = `
                        <img src="${ex.engineering.photoUrl}" 
                             alt="${ex.engineering.photoCaption}" 
                             class="w-full h-full object-cover opacity-85 transition-transform duration-1000">
                        <div class="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-obsidian/20 pointer-events-none"></div>
                        <!-- Physical Component Highlight Ring Overlay -->
                        <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="absolute inset-0 w-full h-full pointer-events-none">
                            <ellipse cx="${activeH.x}" cy="${activeH.y}" rx="${activeH.rx || 18}" ry="${activeH.ry || 16}"
                                     fill="rgba(125, 211, 252, 0.08)"
                                     stroke="rgba(125, 211, 252, 0.55)"
                                     stroke-width="0.45"
                                     stroke-dasharray="1.8 1.2"
                                     class="transition-all duration-500 ease-out" />
                        </svg>
                        <div class="absolute bottom-4 left-6 right-6 text-xs text-stone-300 font-light pointer-events-none">
                            ${ex.engineering.photoCaption}
                        </div>
                    `;
                } else {
                    // Clean architectural line schematic with component highlighting
                    const diagramClass = (index) =>
    `svg-part ${idxActive === index ? 'svg-part-active' : ''}`;

const diagramStart = `
    <div class="w-full h-full flex items-center justify-center p-6 bg-charcoal">
      <svg viewBox="0 0 600 360" class="w-full h-full stroke-sky-300/75 fill-none"
           stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"
           role="img" aria-label="${ex.name} simplified engineering diagram">
`;

const diagramEnd = `</svg></div>`;

let drawing = '';

switch (ex.id) {
    case 'apollo_lm':
    case 'apollo-lm':
        drawing = `
          <path d="M80 305H520" stroke="rgba(255,255,255,.2)"/>
          <g class="${diagramClass(0)}">
            <path d="M210 175L245 115H355L390 175L370 270H230Z"
                  fill="rgba(125,211,252,.10)"/>
            <path d="M245 115L265 75H335L355 115" />
            <path d="M230 270L185 305M370 270L415 305M185 305H415"/>
            <path d="M245 115L215 175M355 115L385 175"/>
          </g>
          <g class="${diagramClass(1)}">
            <path d="M265 75V45H335V75M280 45V25H320V45"/>
          </g>
          <g class="${diagramClass(2)}">
            <path d="M245 115L205 95M355 115L395 95"/>
          </g>
          <g class="${diagramClass(3)}">
            <path d="M230 270L210 290M370 270L390 290"/>
          </g>`;
        break;

    case 'lrv':
    case 'lunar-rover':
        drawing = `
          <path d="M65 300H535" stroke="rgba(255,255,255,.2)"/>
          <g class="${diagramClass(0)}">
            <path d="M180 155L420 155L390 215H210Z"
                  fill="rgba(125,211,252,.10)"/>
            <path d="M210 155L245 115H355L390 155"/>
          </g>
          <g class="${diagramClass(1)}">
            <path d="M290 155L270 95L245 75M270 95L300 75"/>
            <circle cx="245" cy="75" r="7"/>
          </g>
          <g class="${diagramClass(2)}">
            <path d="M300 155V105L330 85M330 85L355 95"/>
            <circle cx="355" cy="95" r="5"/>
          </g>
          <g class="${diagramClass(3)}">
            <path d="M210 205L185 250H415L390 205"/>
            <circle cx="185" cy="260" r="30" fill="rgba(16,18,22,.9)"/>
            <circle cx="300" cy="260" r="30" fill="rgba(16,18,22,.9)"/>
            <circle cx="415" cy="260" r="30" fill="rgba(16,18,22,.9)"/>
          </g>`;
        break;

    case 'alsep':
        drawing = `
          <path d="M55 300H545" stroke="rgba(255,255,255,.2)"/>
          <g class="${diagramClass(0)}">
            <rect x="245" y="145" width="110" height="65" rx="5"
                  fill="rgba(125,211,252,.10)"/>
            <path d="M300 145V105M285 105H315"/>
          </g>
          <g class="${diagramClass(1)}">
            <path d="M245 175L155 125M355 175L445 125M300 210V265"/>
            <rect x="115" y="100" width="80" height="45" rx="4"/>
            <rect x="405" y="100" width="80" height="45" rx="4"/>
          </g>
          <g class="${diagramClass(2)}">
            <path d="M300 265L270 290H330Z"/>
            <path d="M270 290V305M330 290V305"/>
          </g>
          <g class="${diagramClass(3)}">
            <path d="M155 125L110 190M445 125L490 190"/>
            <circle cx="110" cy="200" r="12"/>
            <circle cx="490" cy="200" r="12"/>
          </g>`;
        break;

    case 'surveyor':
        drawing = `
          <path d="M55 300H545" stroke="rgba(255,255,255,.2)"/>
          <g class="${diagramClass(0)}">
            <body/>
            <rect x="235" y="135" width="130" height="65" rx="8"
                  fill="rgba(125,211,252,.10)"/>
            <path d="M250 135L270 105H330L350 135"/>
          </g>
          <g class="${diagramClass(1)}">
            <path d="M250 200L190 260M350 200L410 260M270 200L250 270M330 200L350 270"/>
            <path d="M180 260H215M385 260H420M235 270H265M335 270H365"/>
          </g>
          <g class="${diagramClass(2)}">
            <path d="M300 135V80L330 55"/>
            <circle cx="330" cy="55" r="9"/>
          </g>
          <g class="${diagramClass(3)}">
            <path d="M235 155L170 125M365 155L430 125"/>
            <rect x="135" y="105" width="38" height="38" rx="4"/>
            <rect x="427" y="105" width="38" height="38" rx="4"/>
          </g>`;
        drawing = drawing.replace('<body/>', '');
        break;

    case 'sojourner':
        drawing = `
          <path d="M55 300H545" stroke="rgba(255,255,255,.2)"/>
          <g class="${diagramClass(0)}">
            <rect x="230" y="155" width="140" height="65" rx="8"
                  fill="rgba(125,211,252,.10)"/>
            <path d="M245 155L270 125H330L355 155"/>
          </g>
          <g class="${diagramClass(1)}">
            <path d="M300 155V100L325 80"/>
            <circle cx="325" cy="80" r="8"/>
          </g>
          <g class="${diagramClass(2)}">
            <path d="M230 180L175 155M370 180L425 155"/>
            <rect x="145" y="135" width="30" height="40"/>
            <rect x="425" y="135" width="30" height="40"/>
          </g>
          <g class="${diagramClass(3)}">
            <path d="M245 220L215 255H385L355 220"/>
            <circle cx="215" cy="265" r="24"/>
            <circle cx="300" cy="265" r="24"/>
            <circle cx="385" cy="265" r="24"/>
          </g>`;
        break;

    case 'spirit':
        drawing = `
          <path d="M55 300H545" stroke="rgba(255,255,255,.2)"/>
          <g class="${diagramClass(0)}">
            <rect x="225" y="145" width="150" height="70" rx="8"
                  fill="rgba(125,211,252,.10)"/>
            <path d="M240 145L270 115H330L360 145"/>
          </g>
          <g class="${diagramClass(1)}">
            <path d="M245 165L180 205L150 245"/>
            <circle cx="150" cy="245" r="12"/>
          </g>
          <g class="${diagramClass(2)}">
            <path d="M300 145V75M300 75L330 55"/>
            <path d="M330 55L365 65"/>
          </g>
          <g class="${diagramClass(3)}">
            <path d="M240 215L205 255H395L360 215"/>
            <circle cx="205" cy="265" r="27"/>
            <circle cx="300" cy="265" r="27"/>
            <circle cx="395" cy="265" r="27"/>
          </g>`;
        break;

    case 'viking':
        drawing = `
          <path d="M55 300H545" stroke="rgba(255,255,255,.2)"/>
          <g class="${diagramClass(0)}">
            <rect x="225" y="130" width="150" height="85" rx="5"
                  fill="rgba(125,211,252,.10)"/>
            <path d="M245 130L265 100H335L355 130"/>
          </g>
          <g class="${diagramClass(1)}">
            <path d="M245 215L210 280M355 215L390 280"/>
            <path d="M190 280H230M370 280H410"/>
          </g>
          <g class="${diagramClass(2)}">
            <path d="M300 130V75L330 55"/>
            <circle cx="330" cy="55" r="9"/>
          </g>
          <g class="${diagramClass(3)}">
            <path d="M225 155L165 125M375 155L435 125"/>
            <rect x="125" y="105" width="40" height="40"/>
            <rect x="435" y="105" width="40" height="40"/>
          </g>`;
        break;

    case 'phoenix':
        drawing = `
          <path d="M55 300H545" stroke="rgba(255,255,255,.2)"/>
          <g class="${diagramClass(0)}">
            <rect x="240" y="155" width="120" height="60" rx="6"
                  fill="rgba(125,211,252,.10)"/>
            <path d="M255 155L275 125H325L345 155"/>
          </g>
          <g class="${diagramClass(1)}">
            <path d="M255 170L185 125L155 150L175 185"/>
            <path d="M175 185L150 205"/>
            <circle cx="150" cy="205" r="9"/>
          </g>
          <g class="${diagramClass(2)}">
            <path d="M300 155V95L330 75"/>
            <circle cx="330" cy="75" r="7"/>
          </g>
          <g class="${diagramClass(3)}">
            <path d="M255 215L225 275M345 215L375 275"/>
            <path d="M210 275H240M360 275H390"/>
          </g>`;
        break;

    case 'ingenuity':
        drawing = `
          <path d="M55 300H545" stroke="rgba(255,255,255,.2)"/>
          <g class="${diagramClass(0)}">
            <path d="M300 150V100M105 100H495" stroke-width="4"/>
            <path d="M105 100L120 90M105 100L120 110M495 100L480 90M495 100L480 110"/>
          </g>
          <g class="${diagramClass(1)}">
            <rect x="265" y="155" width="70" height="65" rx="10"
                  fill="rgba(125,211,252,.10)"/>
            <path d="M300 155V135"/>
          </g>
          <g class="${diagramClass(2)}">
            <path d="M265 175L220 145L195 155M335 175L380 145L405 155"/>
            <path d="M195 155L185 180M405 155L415 180"/>
          </g>
          <g class="${diagramClass(3)}">
            <path d="M265 220L240 265M335 220L360 265"/>
            <path d="M225 265H255M345 265H375"/>
          </g>`;
        break;

    case 'dawn':
        drawing = `
          <circle cx="300" cy="180" r="82" stroke="rgba(255,255,255,.16)" stroke-dasharray="5 5"/>
          <g class="${diagramClass(0)}">
            <rect x="260" y="145" width="80" height="70" rx="12"
                  fill="rgba(125,211,252,.10)"/>
            <path d="M260 160L160 120L145 140L250 180M340 160L440 120L455 140L350 180"/>
          </g>
          <g class="${diagramClass(1)}">
            <path d="M300 145V90L325 65"/>
            <circle cx="325" cy="65" r="8"/>
          </g>
          <g class="${diagramClass(2)}">
            <path d="M260 190L215 220M340 190L385 220"/>
            <path d="M215 220L195 245M385 220L405 245"/>
          </g>
          <g class="${diagramClass(3)}">
            <path d="M300 215V260M285 260H315"/>
          </g>`;
        break;

    case 'near':
        drawing = `
          <path d="M55 300H545" stroke="rgba(255,255,255,.2)"/>
          <path d="M370 215C330 185 355 115 420 105C485 95 510 165 475 220C450 260 395 260 370 215Z"
                fill="rgba(200,125,101,.10)" stroke="#C87D65"/>
          <g class="${diagramClass(0)}">
            <rect x="130" y="145" width="115" height="55" rx="8"
                  fill="rgba(125,211,252,.10)"/>
            <path d="M245 170L300 170L330 145"/>
          </g>
          <g class="${diagramClass(1)}">
            <path d="M185 145V100L210 80"/>
            <circle cx="210" cy="80" r="8"/>
          </g>
          <g class="${diagramClass(2)}">
            <path d="M130 160L80 135M130 185L80 210"/>
            <rect x="55" y="120" width="25" height="105"/>
          </g>
          <g class="${diagramClass(3)}">
            <path d="M150 200L135 255M225 200L240 255"/>
          </g>`;
        break;

    case 'pioneer':
        drawing = `
          <g class="${diagramClass(0)}">
            <path d="M300 165V255M300 165L230 110M300 165L370 110"/>
            <path d="M230 110L190 80M370 110L410 80"/>
            <circle cx="300" cy="165" r="28" fill="rgba(125,211,252,.10)"/>
          </g>
          <g class="${diagramClass(1)}">
            <path d="M300 137V55"/>
            <path d="M280 55H320L300 25Z"/>
          </g>
          <g class="${diagramClass(2)}">
            <path d="M300 165L245 205M300 165L355 205"/>
            <circle cx="245" cy="205" r="8"/>
            <circle cx="355" cy="205" r="8"/>
          </g>
          <g class="${diagramClass(3)}">
            <path d="M190 80L145 55M410 80L455 55"/>
            <path d="M145 55L130 40M455 55L470 40"/>
          </g>`;
        break;

    case 'kepler':
        drawing = `
          <g class="${diagramClass(0)}">
            <path d="M230 145H370L390 195H210Z"
                  fill="rgba(125,211,252,.10)"/>
            <rect x="260" y="145" width="80" height="50" rx="5"/>
          </g>
          <g class="${diagramClass(1)}">
            <path d="M230 155L125 115L110 135L215 185M370 155L475 115L490 135L385 185"/>
          </g>
          <g class="${diagramClass(2)}">
            <path d="M300 145V95L325 75"/>
            <circle cx="325" cy="75" r="8"/>
          </g>
          <g class="${diagramClass(3)}">
            <path d="M260 195L240 250M340 195L360 250"/>
            <path d="M240 250H360"/>
          </g>`;
        break;

    default:
        // Deliberately do not substitute another spacecraft's diagram.
        drawing = `
          <text x="300" y="170" text-anchor="middle"
                fill="rgba(255,255,255,.7)" stroke="none" font-size="15">
            No spacecraft-specific diagram supplied
          </text>`;
        break;
}

backdropHtml = diagramStart + drawing + diagramEnd;

                }

                const pinsHtml = ex.engineering.hotspots.map((h, idx) => {
                    const isActive = idx === this.activeHotspotIndex;
                    return `
                        <button onclick="app.selectHotspot(${idx}, true)"
                                style="left: ${h.x}%; top: ${h.y}%;"
                                aria-label="Inspect ${h.name}"
                                class="photo-hotspot absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full font-mono text-xs font-medium flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${isActive ? 'bg-sky-300 text-obsidian scale-110 shadow-lg shadow-sky-300/30' : 'bg-obsidian/85 text-white border border-sky-300/80 hover:bg-sky-300 hover:text-obsidian'}">
                            ${idx + 1}
                        </button>
                    `;
                }).join('');

                stage.innerHTML = backdropHtml + pinsHtml;

                pills.innerHTML = ex.engineering.hotspots.map((h, idx) => {
                    const isActive = idx === this.activeHotspotIndex;
                    return `
                        <button onclick="app.selectHotspot(${idx}, true)"
                                class="px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${isActive ? 'bg-sky-300 text-obsidian font-semibold' : 'bg-white/[0.06] text-stone-300 hover:bg-white/[0.12]'}">
                            0${idx + 1}. ${h.name}
                        </button>
                    `;
                }).join('');
            },

            // Reveal What It Is, What It Does, Why Engineers Designed It, and Mission Impact with smooth transition
            selectHotspot(index, playSound = true) {
                if (playSound) this.playAmbientNote('A4');
                const isChanged = this.activeHotspotIndex !== index;
                this.activeHotspotIndex = index;
                const ex = EXPLORERS_DATA[this.activeExplorerId];
                const h = ex.engineering.hotspots[index];

                const panel = document.getElementById('ch3-inspector-panel');
                const renderContent = () => {
                    panel.innerHTML = `
                        <div class="space-y-2">
                            <span class="font-mono text-xs text-sky-300 uppercase tracking-widest">
                                Component 0${index + 1} of 04
                            </span>
                            <h3 class="font-display text-2xl sm:text-3xl font-bold text-white">
                                ${h.name}
                            </h3>
                        </div>

                        <div class="space-y-4 text-sm sm:text-base font-light leading-relaxed text-stone-300">
                            <div>
                                <span class="text-xs font-mono uppercase text-stone-400 block mb-0.5">What It Is</span>
                                <p class="text-stone-100">${h.whatItIs}</p>
                            </div>
                            <div>
                                <span class="text-xs font-mono uppercase text-stone-400 block mb-0.5">What It Does</span>
                                <p>${h.whatItDoes}</p>
                            </div>
                            <div>
                                <span class="text-xs font-mono uppercase text-stone-400 block mb-0.5">Why Engineers Designed It This Way</span>
                                <p>${h.whyDesigned}</p>
                            </div>
                            <div class="pt-3 border-t border-white/10">
                                <span class="text-xs font-mono uppercase text-sky-300 block mb-0.5">How It Helped Accomplish the Mission</span>
                                <p class="text-white font-normal">${h.missionImpact}</p>
                            </div>
                        </div>
                    `;
                };

                if (playSound && isChanged) {
                    panel.classList.add('panel-fading');
                    setTimeout(() => {
                        renderContent();
                        panel.classList.remove('panel-fading');
                    }, 170);
                } else {
                    renderContent();
                }

                this.renderEngineeringStage();
            },

            // Render Contextual Hands-On Science Experience in Chapter 04 with Interactive Visualisations
            renderInteractiveDiscoveryExperience(labType) {
                const container = document.getElementById('ch4-interactive-lab');
                if (this.seismicAnimFrame) {
                    cancelAnimationFrame(this.seismicAnimFrame);
                    this.seismicAnimFrame = null;
                }

                if (labType === 'spectrometer') {
                    this.activeMineralSample = 'hematite';
                    container.innerHTML = `
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div class="lg:col-span-6 space-y-4">
                                <span class="font-mono text-xs text-sky-300 uppercase tracking-widest block">
                                    Interactive Discovery &mdash; Reading the Rocks
                                </span>
                                <h4 class="font-display text-2xl sm:text-3xl font-bold text-white">
                                    Examine Opportunity’s Mineral Samples
                                </h4>
                                <p class="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
                                    Select a geological target examined by Opportunity’s robotic arm to see its Mössbauer spectral fingerprint and what it proved about ancient Martian water:
                                </p>
                                <div id="mineral-btn-group" class="flex flex-wrap gap-3 pt-2">
                                    <button onclick="app.runLabSample('hematite')" data-mineral="hematite" class="px-5 py-2.5 rounded-full bg-white text-obsidian font-medium text-xs sm:text-sm transition-all">
                                        Eagle Crater "Blueberries"
                                    </button>
                                    <button onclick="app.runLabSample('jarosite')" data-mineral="jarosite" class="px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-stone-200 font-medium text-xs sm:text-sm transition-all">
                                        El Capitan Outcrop
                                    </button>
                                    <button onclick="app.runLabSample('gypsum')" data-mineral="gypsum" class="px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-stone-200 font-medium text-xs sm:text-sm transition-all">
                                        Endeavour "Homestake" Vein
                                    </button>
                                </div>
                            </div>
                            <div class="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-obsidian/80 space-y-5">
                                <!-- Animated Spectral Absorption Curve SVG -->
                                <div class="space-y-2">
                                    <div class="flex justify-between items-center text-[11px] font-mono text-stone-400">
                                        <span>SPECTRAL ABSORPTION SIGNATURE</span>
                                        <span id="mineral-ph-badge" class="text-sky-300">GROUNDWATER CONCRETION</span>
                                    </div>
                                    <div class="h-28 w-full rounded-xl bg-charcoal/90 p-3 flex items-center">
                                        <svg viewBox="0 0 400 90" class="w-full h-full overflow-visible">
                                            <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.07)" stroke-dasharray="3 3"/>
                                            <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.07)"/>
                                            <path id="spectrum-curve-path"
                                                  d="M 0,20 L 45,22 L 70,78 L 95,22 L 145,25 L 170,62 L 195,25 L 225,64 L 250,22 L 305,22 L 330,82 L 355,22 L 400,20"
                                                  fill="none"
                                                  stroke="#7DD3FC"
                                                  stroke-width="2.2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  class="transition-all duration-700 ease-out" />
                                        </svg>
                                    </div>
                                </div>
                                <div id="lab-readout-box" class="panel-transition space-y-2">
                                    <div class="font-mono text-xs text-sky-300 uppercase">Crystalline Hematite (α-Fe₂O₃)</div>
                                    <p class="text-sm sm:text-base text-stone-200 font-light leading-relaxed">
                                        These iron-oxide spheres formed when mineral-rich groundwater slowly percolated through porous volcanic rock layers billions of years ago.
                                    </p>
                                </div>
                            </div>
                        </div>
                    `;
                } else if (labType === 'laser') {
                    container.innerHTML = `
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div class="lg:col-span-6 space-y-4">
                                <span class="font-mono text-xs text-sky-300 uppercase tracking-widest block">
                                    Interactive Discovery &mdash; Live Optical Echo
                                </span>
                                <h4 class="font-display text-2xl sm:text-3xl font-bold text-white">
                                    Bounce a Laser Pulse Off Tranquility Base
                                </h4>
                                <p class="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
                                    Send a pulse of light across the 384,400-kilometer gulf between Earth and the Apollo 11 mirror array to watch the round-trip reflection in real time:
                                </p>
                                <div class="pt-2">
                                    <button id="laser-fire-btn" onclick="app.fireLaserSimulation()" class="px-6 py-3 rounded-full bg-sky-300 hover:bg-white text-obsidian font-display font-bold text-xs sm:text-sm transition-all">
                                        Send Laser Pulse to Apollo 11
                                    </button>
                                </div>
                            </div>
                            <div class="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-obsidian/80 space-y-5">
                                <!-- Visual Earth-to-Moon Laser Path Simulation -->
                                <div class="rounded-xl bg-charcoal/90 p-4">
                                    <svg viewBox="0 0 420 96" class="w-full h-24 overflow-visible">
                                        <!-- Dashed Optical Path -->
                                        <line x1="48" y1="48" x2="368" y2="48" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" stroke-dasharray="4 4"/>
                                        <!-- Active Beam Trace -->
                                        <line id="laser-beam-line" x1="48" y1="48" x2="368" y2="48" stroke="rgba(125,211,252,0)" stroke-width="2" class="transition-all duration-300"/>
                                        <!-- Earth Node -->
                                        <circle cx="36" cy="48" r="14" fill="rgba(125,211,252,0.15)" stroke="#7DD3FC" stroke-width="1.5"/>
                                        <text x="36" y="78" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono" font-size="9">EARTH</text>
                                        <!-- Moon Retroreflector Node -->
                                        <circle cx="380" cy="48" r="11" fill="rgba(214,217,223,0.15)" stroke="#D6D9DF" stroke-width="1.5"/>
                                        <polygon id="lunar-prism-flash" points="370,40 378,48 370,56" fill="#7DD3FC" opacity="0.35" class="transition-opacity duration-300"/>
                                        <text x="380" y="78" text-anchor="middle" fill="#9CA3AF" font-family="JetBrains Mono" font-size="9">TRANQUILITY</text>
                                        <!-- Travelling Photon Pulse -->
                                        <circle id="laser-photon-dot" cx="48" cy="48" r="5" fill="#7DD3FC" opacity="0" />
                                    </svg>
                                </div>
                                <div id="lab-readout-box" class="panel-transition space-y-2">
                                    <div class="font-mono text-xs text-sky-300 uppercase">Ready to Range Tranquility Base</div>
                                    <p class="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
                                        Light travels at 299,792 kilometers per second. Trigger a pulse to watch the photon cross the void and measure the Moon’s distance to the millimeter.
                                    </p>
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    this.activeSeismicEvent = 's1222a';
                    container.innerHTML = `
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div class="lg:col-span-6 space-y-4">
                                <span class="font-mono text-xs text-sky-300 uppercase tracking-widest block">
                                    Interactive Discovery &mdash; Planetary Seismology
                                </span>
                                <h4 class="font-display text-2xl sm:text-3xl font-bold text-white">
                                    Explore InSight’s Recorded Marsquakes
                                </h4>
                                <p class="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
                                    Select one of the historic seismic events felt by InSight on Elysium Planitia to inspect its live P-wave and S-wave seismogram:
                                </p>
                                <div id="seismic-btn-group" class="flex flex-wrap gap-3 pt-2">
                                    <button onclick="app.runLabSeismic('s1222a')" data-seismic="s1222a" class="px-5 py-2.5 rounded-full bg-white text-obsidian font-medium text-xs sm:text-sm transition-all">
                                        Sol 1222: Magnitude 4.7 Quake
                                    </button>
                                    <button onclick="app.runLabSeismic('impact')" data-seismic="impact" class="px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-stone-200 font-medium text-xs sm:text-sm transition-all">
                                        Sol 1094: Ice-Excavating Meteoroid Strike
                                    </button>
                                </div>
                            </div>
                            <div class="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-obsidian/80 space-y-5">
                                <!-- Live Animated Marsquake Seismogram Canvas -->
                                <div class="space-y-2">
                                    <div class="flex justify-between items-center text-[11px] font-mono text-stone-400">
                                        <span>SEIS VERY BROADBAND SEISMOGRAM</span>
                                        <span id="seismic-freq-label" class="text-sky-300">DEEP CRUSTAL WAVEFORM</span>
                                    </div>
                                    <div class="h-28 w-full rounded-xl bg-charcoal/90 p-2 overflow-hidden">
                                        <canvas id="seismogram-canvas" class="w-full h-full block"></canvas>
                                    </div>
                                </div>
                                <div id="lab-readout-box" class="panel-transition space-y-2">
                                    <div class="font-mono text-xs text-sky-300 uppercase">Event S1222a &mdash; May 4, 2022</div>
                                    <p class="text-sm sm:text-base text-stone-200 font-light leading-relaxed">
                                        The largest marsquake ever recorded. Its seismic waves circled all the way around Mars multiple times for six hours, allowing geophysicists to map the thickness of the planet’s crust.
                                    </p>
                                </div>
                            </div>
                        </div>
                    `;
                    this.startSeismogramAnimation();
                }
            },

            runLabSample(sample) {
                this.playAmbientNote('C5');
                this.activeMineralSample = sample;
                const box = document.getElementById('lab-readout-box');
                const path = document.getElementById('spectrum-curve-path');
                const badge = document.getElementById('mineral-ph-badge');
                if (!box) return;

                document.querySelectorAll('#mineral-btn-group button').forEach(btn => {
                    const active = btn.getAttribute('data-mineral') === sample;
                    btn.className = active
                        ? 'px-5 py-2.5 rounded-full bg-white text-obsidian font-medium text-xs sm:text-sm transition-all'
                        : 'px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-stone-200 font-medium text-xs sm:text-sm transition-all';
                });

                const data = {
                    hematite: {
                        title: 'Crystalline Hematite (α-Fe₂O₃)',
                        badge: 'GROUNDWATER CONCRETION (IRON OXIDE)',
                        curve: 'M 0,20 L 45,22 L 70,78 L 95,22 L 145,25 L 170,62 L 195,25 L 225,64 L 250,22 L 305,22 L 330,82 L 355,22 L 400,20',
                        desc: 'These iron-oxide spheres formed when mineral-rich groundwater slowly percolated through porous volcanic rock layers billions of years ago.'
                    },
                    jarosite: {
                        title: 'Jarosite Hydrous Sulfate',
                        badge: 'ACIDIC SULFATE EVAPORITE (pH ~3)',
                        curve: 'M 0,20 L 90,22 L 125,35 L 165,84 L 200,30 L 235,84 L 275,35 L 310,22 L 400,20',
                        desc: 'Identified inside the El Capitan rock outcrop—a sulfate mineral that only forms in acidic liquid water, proving Eagle Crater was once wet.'
                    },
                    gypsum: {
                        title: 'Hydrated Calcium Sulfate (Gypsum)',
                        badge: 'NEUTRAL HABITABLE WATER (pH ~7)',
                        curve: 'M 0,22 L 60,24 L 110,74 L 150,45 L 205,82 L 260,35 L 315,65 L 360,24 L 400,22',
                        desc: 'Discovered in the bright "Homestake" vein at Endeavour Crater—deposited by mild, neutral-pH water capable of supporting prebiotic chemistry.'
                    }
                }[sample];

                if (path) path.setAttribute('d', data.curve);
                if (badge) badge.textContent = data.badge;

                box.classList.add('panel-fading');
                setTimeout(() => {
                    box.innerHTML = `
                        <div class="font-mono text-xs text-sky-300 uppercase">${data.title}</div>
                        <p class="text-sm sm:text-base text-stone-200 font-light leading-relaxed">${data.desc}</p>
                    `;
                    box.classList.remove('panel-fading');
                }, 160);
            },

            fireLaserSimulation() {
                if (this.laserInFlight) return;
                this.laserInFlight = true;
                this.playAmbientNote('E5');

                const box = document.getElementById('lab-readout-box');
                const photon = document.getElementById('laser-photon-dot');
                const beam = document.getElementById('laser-beam-line');
                const flash = document.getElementById('lunar-prism-flash');
                const btn = document.getElementById('laser-fire-btn');
                if (!box || !photon) {
                    this.laserInFlight = false;
                    return;
                }

                if (btn) btn.textContent = 'Pulse in Flight Across Space...';
                beam.setAttribute('stroke', 'rgba(125,211,252,0.45)');
                photon.setAttribute('opacity', '1');

                const duration = 1280; // Scaled representation of 2.56s round-trip
                const startTime = performance.now();

                box.innerHTML = `
                    <div class="font-mono text-xs text-sky-300 uppercase">Optical Pulse in Transit...</div>
                    <p class="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
                        Crossing 384,400 km at 299,792 km/s toward Tranquility Base...
                    </p>
                `;

                const animatePhoton = (now) => {
                    const elapsed = now - startTime;
                    const progress = Math.min(1, elapsed / duration);
                    // 0 -> 0.5 outbound to Moon (x: 48 to 368), 0.5 -> 1.0 return to Earth (x: 368 to 48)
                    let xPos = 48;
                    if (progress <= 0.5) {
                        xPos = 48 + (progress * 2) * (368 - 48);
                    } else {
                        if (flash) flash.setAttribute('opacity', '1');
                        xPos = 368 - ((progress - 0.5) * 2) * (368 - 48);
                    }
                    photon.setAttribute('cx', xPos.toFixed(1));

                    if (progress < 1) {
                        requestAnimationFrame(animatePhoton);
                    } else {
                        photon.setAttribute('opacity', '0');
                        beam.setAttribute('stroke', 'rgba(125,211,252,0)');
                        if (flash) flash.setAttribute('opacity', '0.35');
                        if (btn) btn.textContent = 'Send Another Laser Pulse';
        
                        const jitter = (Math.random() * 0.0004 - 0.0002).toFixed(6);
                        const flightTime = (2.564412 + parseFloat(jitter)).toFixed(6);
                        const dist = ((299792.458 * flightTime) / 2).toFixed(4);
                        box.innerHTML = `
                            <div class="font-mono text-xs text-emerald-400 uppercase">Optical Echo Received &mdash; ${flightTime} Seconds</div>
                            <p class="font-display text-xl font-bold text-white">${dist} km (&plusmn;1.1 mm)</p>
                            <p class="text-xs text-stone-400 font-light">1 single returning photon captured out of 10¹⁷ photons fired from Earth.</p>
                        `;
                        this.laserInFlight = false;
                    }
                };

                requestAnimationFrame(animatePhoton);
            },

            runLabSeismic(eventKey) {
                this.playAmbientNote('G4');
                this.activeSeismicEvent = eventKey;
                const box = document.getElementById('lab-readout-box');
                const freqLabel = document.getElementById('seismic-freq-label');
                if (!box) return;

                document.querySelectorAll('#seismic-btn-group button').forEach(btn => {
                    const active = btn.getAttribute('data-seismic') === eventKey;
                    btn.className = active
                        ? 'px-5 py-2.5 rounded-full bg-white text-obsidian font-medium text-xs sm:text-sm transition-all'
                        : 'px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-stone-200 font-medium text-xs sm:text-sm transition-all';
                });

                box.classList.add('panel-fading');
                setTimeout(() => {
                    if (eventKey === 's1222a') {
                        if (freqLabel) freqLabel.textContent = 'DEEP CRUSTAL WAVEFORM (MAGNITUDE 4.7)';
                        box.innerHTML = `
                            <div class="font-mono text-xs text-sky-300 uppercase">Event S1222a &mdash; May 4, 2022</div>
                            <p class="text-sm sm:text-base text-stone-200 font-light leading-relaxed">
                                The largest marsquake ever recorded. Its seismic waves circled all the way around Mars multiple times for six hours, allowing geophysicists to map the thickness of the planet’s crust.
                            </p>
                        `;
                    } else {
                        if (freqLabel) freqLabel.textContent = 'HIGH-FREQUENCY IMPACT SHOCKWAVE (SOL 1094)';
                        box.innerHTML = `
                            <div class="font-mono text-xs text-sky-300 uppercase">Sol 1094 Meteoroid Strike &mdash; Dec 24, 2021</div>
                            <p class="text-sm sm:text-base text-stone-200 font-light leading-relaxed">
                                A magnitude 4.0 impact in Amazonis Planitia shook InSight’s seismometer and gouged a 150-meter crater, exposing bright blocks of pure subsurface water ice.
                            </p>
                        `;
                    }
                    box.classList.remove('panel-fading');
                }, 160);
            },

            startSeismogramAnimation() {
                const canvas = document.getElementById('seismogram-canvas');
                if (!canvas) return;
                const ctx = canvas.getContext('2d');
                let phase = 0;

                const drawWave = () => {
                    if (!document.getElementById('seismogram-canvas') || this.currentChapter !== 4) {
                        this.seismicAnimFrame = null;
                        return;
                    }
                    const w = canvas.width = canvas.clientWidth || 400;
                    const h = canvas.height = canvas.clientHeight || 90;
                    const mid = h / 2;

                    ctx.clearRect(0, 0, w, h);

                    // Subtle baseline
                    ctx.beginPath();
                    ctx.moveTo(0, mid);
                    ctx.lineTo(w, mid);
                    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
                    ctx.lineWidth = 1;
                    ctx.stroke();

                    // P-wave and S-wave envelope
                    ctx.beginPath();
                    const isImpact = this.activeSeismicEvent === 'impact';
                    for (let x = 0; x < w; x++) {
                        const norm = x / w;
                        const pPacket = Math.exp(-Math.pow((norm - 0.28) * 9, 2)) * (isImpact ? 24 : 14);
                        const sPacket = Math.exp(-Math.pow((norm - 0.64) * 5.5, 2)) * (isImpact ? 20 : 32);
                        const freq = isImpact ? 0.28 : 0.17;
                        const y = mid + Math.sin(x * freq - phase) * (pPacket + sPacket + 1.5) * Math.cos(x * 0.05 + phase * 0.4);
                        if (x === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.strokeStyle = isImpact ? '#C87D65' : '#7DD3FC';
                    ctx.lineWidth = 1.8;
                    ctx.stroke();

                    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                        phase += 0.08;
                        this.seismicAnimFrame = requestAnimationFrame(drawWave);
                    }
                };

                drawWave();
            },

            // Emotional Finale Commemorative Signal Interaction
            sendTributeSignal() {
                this.playAmbientNote('G5');
                const ex = EXPLORERS_DATA[this.activeExplorerId];
                const status = document.getElementById('tribute-signal-status');
                const dot = document.getElementById('tribute-ping-dot');
                const label = document.getElementById('tribute-signal-label');
                if (!status) return;

                if (dot) dot.className = 'w-2 h-2 rounded-full bg-emerald-400 animate-ping';
                if (label) label.textContent = `Signal Beamed Toward ${ex.worldLabel}`;
                status.textContent = ` Commemorative telemetry logged for ${ex.name} (${ex.coordinates}) — The discoveries live on.`;
                status.classList.remove('opacity-0');
                status.classList.add('opacity-100');

                setTimeout(() => {
                    if (dot) dot.className = 'w-2 h-2 rounded-full bg-sky-300';
                }, 2400);
            },

            toggleSourcesModal(show) {
                const modal = document.getElementById('sources-modal');
                modal.classList.toggle('hidden', !show);
            },

            // IntersectionObserver for Progressive Scroll Reveals
            initScrollRevealObserver() {
                if (!('IntersectionObserver' in window)) {
                    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-visible'));
                    return;
                }
                this.scrollObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                        }
                    });
                }, { threshold: 0.15 });

                this.observeScrollElements();
            },

            observeScrollElements() {
                if (!this.scrollObserver) return;
                setTimeout(() => {
                    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                        this.scrollObserver.observe(el);
                    });
                }, 60);
            },

            // Gentle Documentary Chime Audio
            loadToneLibrary() {
                // Load Tone.js once, without starting audio or requesting sound from the visitor.
                if (window.Tone) return Promise.resolve(window.Tone);
                if (this.toneLoadPromise) return this.toneLoadPromise;

                this.toneLoadPromise = new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js';
                    script.async = true;
                    script.onload = () => window.Tone ? resolve(window.Tone) : reject(new Error('Tone.js did not initialize.'));
                    script.onerror = () => reject(new Error('Tone.js could not be loaded.'));
                    document.head.appendChild(script);
                }).catch(error => {
                    this.toneLoadPromise = null;
                    console.warn('Documentary audio is unavailable:', error);
                    throw error;
                });

                return this.toneLoadPromise;
            },

            async toggleAudio() {
                const off = document.getElementById('icon-audio-off');
                const on = document.getElementById('icon-audio-on');

                // Turning sound off should not attempt to start the audio context.
                if (this.audioEnabled) {
                    this.audioEnabled = false;
                    if (off) off.classList.remove('hidden');
                    if (on) on.classList.add('hidden');
                    return;
                }

                try {
                    const Tone = await this.loadToneLibrary();
                    await Tone.start();

                    if (!this.synth) {
                        this.synth = new Tone.PolySynth(Tone.Synth, {
                            oscillator: { type: 'sine' },
                            envelope: { attack: 0.08, decay: 0.4, sustain: 0.0, release: 1.2 }
                        }).toDestination();
                        this.synth.volume.value = -20;
                    }

                    this.audioEnabled = true;
                    if (off) off.classList.add('hidden');
                    if (on) on.classList.remove('hidden');
                    this.playAmbientNote('G4');
                } catch (e) {
                    this.audioEnabled = false;
                    if (off) off.classList.remove('hidden');
                    if (on) on.classList.add('hidden');
                    console.warn('Could not enable documentary audio:', e);
                }
            },

            playAmbientNote(note = 'C4') {
                if (!this.audioEnabled || !this.synth) return;
                try {
                    this.synth.triggerAttackRelease(note, '8n');
                } catch (e) {
                    console.warn('Could not play documentary chime:', e);
                }
            },

            // Calm, Restrained Deep-Space Starfield
            initCosmosCanvas() {
                const canvas = document.getElementById('cosmos-canvas');
                if (!canvas) return;
                const ctx = canvas.getContext('2d');
                let width = canvas.width = window.innerWidth;
                let height = canvas.height = window.innerHeight;

                const stars = Array.from({ length: 75 }, () => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r: Math.random() * 1.1 + 0.2,
                    alpha: Math.random() * 0.5 + 0.15
                }));

                function renderStars() {
                    ctx.clearRect(0, 0, width, height);
                    for (const s of stars) {
                        ctx.beginPath();
                        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(243, 244, 246, ${s.alpha})`;
                        ctx.fill();
                    }
                }

                window.addEventListener('resize', () => {
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = window.innerHeight;
                    renderStars();
                });

                renderStars();
            }
        };

        window.onload = () => {
            app.init();
        };