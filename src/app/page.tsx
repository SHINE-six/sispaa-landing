import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, BarChart, Users, Mail, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-blue-500">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* <MessageSquare className="h-6 w-6 text-blue-600" /> */}
            <span className="text-xl font-bold text-blue-600">SellYourself - SISPAA 2.0</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#problem" className="text-gray-600 hover:text-blue-600">Problem</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
              <li><a href="#team" className="text-gray-600 hover:text-blue-600">Team</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-50 py-20 bg-gif">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Empower user and government in Transparency, Efficient, and Trust</h1>
            <p className="text-xl text-white mb-8">Government has done amazing job in solving complaint <br/> Fun Fact: In 2022, Government has solved 90% of 16,000 complaints they received! <br /> We bring more user to the platform and ease the use for both party</p>
            {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button> */}
          </div>
        </section>

        <section id="problem" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">The Problem We Solve</h2>
            <div className="grid grid-cols-1 gap-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Unintuitive UI/UX Design</h3>
                  <ul className="space-y-4">
                    {[
                      "Unfriendly interface that feel like dinosaur age",
                      "Almost similar design between different SISPAA system website",
                      "Hard to navigate and find the right information"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/prob1.png"
                    alt="Inefficient Complaint Management"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Inefficient Handling of Repeating Complaints</h3>
                  <ul className="space-y-4">
                    {[
                      "Many complaints are repeated because customer don't have information on other similar complaints",
                      "Government officer need to repeat the same answer to different user",
                      "Government officer need to waste resource look into the same complaint",
                      "User doesn't feel confident in posting the complaint as they afraid of only they have the problem"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="flex justify-center">
                  <Image
                    src="/prob1.png"
                    alt="Inefficient Complaint Management"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Lack of Transparency and Status Tracking in Complaint Resolution </h3>
                  <ul className="space-y-4">
                    {[
                      "User need to click many button to find the status of the complaint",
                      "User need to know the exact complaint ID to find the status",
                      "The status is not updated in real-time, and is not detailed enough",
                      "There is little to no transparency in the agency that is handling the complaint, and their performance in handling the complaint"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/prob3.png"
                    alt="Inefficient Complaint Management"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Mail className="h-8 w-8 text-blue-600" />, title: "⭐AI-Powered Similar Complaint Detection", description: "Based on user input in the complaint form, the AI will show the top 5 most relevant and similar complaint. This empower user by letting know if the issue has been field before, and also understand the method of filling the issue. This also allow the government investigator team to ease the workload as there is a reduction in repeated complaint", img: "/keySol1.png" },
                { icon: <BarChart className="h-8 w-8 text-blue-600" />, title: "⭐Chatbot", description: "Integrated chatbot in the complaint filling page, that it able to give answer on the similar complaint and relevance to the user complaint form, also help user craft a high quality complaint form", img: "/keySol2.png" },
                { icon: <MessageSquare className="h-8 w-8 text-blue-600" />, title: "Remake UI/UX design and experience", description: "Modernize the interface and make it more user-friendly", img: "/sol1.png" },
                { icon: <BarChart className="h-8 w-8 text-blue-600" />, title: "Tracking Ststus", description: "Real-time status tracking and detailed complaint resolution, and ability to download report as pdf", img: "/sol2.png" },
                { icon: <Users className="h-8 w-8 text-blue-600" />, title: "Agency Feeds", description: "Agency can post the latest news and information to the user, User can check each agency complaint management capability. Instill trust in user", img: "/sol3.png" },
                { icon: <CheckCircle className="h-8 w-8 text-blue-600" />, title: "Single Sign On", description: "Ease the user to login to the different SISPAA system", img: "/sol4.png" },
                { icon: <CheckCircle className="h-8 w-8 text-blue-600" />, title: "API CMS", description: "Allow departments to customize their own layout, content, image, color, font design and etc. through our API. Giving them a sense of personalisation.", img: "/sol4.png" },
              ].map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="bg-blue-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Er Yong Jie", role: "4+ years in sales & marketing", image: "/YongJie.jpeg", ImageAdd: "/YongJieDetail.jpeg" },
                { name: "Desmond Foo Yau Yit", role: "Hackathon winner that hack for impact & design scalable system; Software/ Test Engineer @ Materialise", image: "/Desmond.png", ImageAdd: "/DesmondDetail.png" },
                { name: "Alpha Chong Shu Siang", role: "Hackathon winner that hack in web3; software engineer @ ALPHV Technologies", image: "/Alpha.png", ImageAdd: "/AlphaDetail.png" },
              ].map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                    {member.ImageAdd && <Image
                      src={member.ImageAdd}
                      alt={member.name}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">View Our Prototype and Demo Video</h2>
            <div className="flex justify-center space-x-4">
              <a href="https://sellyourself-myhackathon.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-200">
                View Prototype
              </a>
              <a href="https://www.loom.com/share/244b7ce865f648c9b93a9ca8dc977cb8?sid=04d64750-98d8-440f-842e-b3ece275ee49" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-200">
                Watch Demo Video
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              {/* <MessageSquare className="h-6 w-6" /> */}
              <span className="text-xl font-bold">SellYourself - SISPAA 2.0</span>
            </div>
            {/* <nav className="mb-4 md:mb-0">
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-300">Contact Us</a></li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6" />
              <span>info@complaintpro.com</span>
            </div> */}
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} SellYourself team propose solution SISPAA 2.0 for hacakthon &apos;MyHackathon 2024&apos;
          </div>
        </div>
      </footer>
    </div>
  )
}