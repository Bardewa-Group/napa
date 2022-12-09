import React from "react";

const News = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[95%] mx-auto my-6">
        <div className="p-4">
            <h2 className="text-center text-3xl mb-4">Breaking News</h2>
            <div>
                <img className="w-[40rem] mx-auto mb-5" src="https://association-webpage.sajannepali.repl.co/images/news1.webp" alt="" />
                <a className="hover:underline text-xl m-4" target="_blank" href="https://www.npr.org/2020/10/12/922936053/california-workplace-discrimination-system-sheds-light-on-caste-system">California Workplace Discrimination System Sheds Light On Caste System</a>
            </div>
            <p className="ml-4 indent-6 opacity-50">This summer, a tech worker filed a workplace discrimination lawsuit in California. The remarkable thing is that the lawsuit isn't about sexual <a target="_blank" href="https://www.npr.org/2020/10/12/922936053/california-workplace-discrimination-system-sheds-light-on-caste-system">...read more</a></p>
        </div>
        <div className="py-4">
            <h2 className="text-center text-3xl mb-4">Top Headlines</h2>
            <div className="overflow-auto h-[30rem] md:mx-[5rem] my-5 w-[90%] mx-auto text-[0.8rem] md:text-[1.2rem]">
                <div className="flex">
                    <img className="md:w-[10rem] mb-3 mr-3 w-[6rem]" src="https://www.aljazeera.com/wp-content/uploads/2021/04/11.jpeg?w=770&resize=770%2C578" alt="" />
                    <a className="hover:underline opacity-50" target="_blank" href="https://www.youtube.com/watch?v=IhlvsD6KqFs">California University Adds Caste To Non-Discrimination Policy</a>
                </div>
                <div className="flex">
                    <img className="md:w-[10rem] mb-3 mr-3 w-[6rem]" src="https://img.youtube.com/vi_webp/f4vl7gK0tYA/maxresdefault.webp" alt="" />
                    <a className="hover:underline opacity-50" target="_blank" href="https://www.latimes.com/california/story/2022-01-20/csu-adds-caste-to-its-anti-discrimination-policy">Cal State System Adds Caste To Anti-Discrimination Policy In Groundbreaking Decision</a>
                </div>
                <div className="flex">
                    <img className="md:w-[10rem] mb-3 mr-3 w-[6rem]" src="https://association-webpage.sajannepali.repl.co/images/news3.jpg" alt="" />
                    <a className="hover:underline opacity-50" target="_blank" href="https://www.wgbh.org/news/education/2022/03/14/hidden-discrimination-california-university-joins-national-trend-to-protect-against-caste-bias-on-campus">
'Hidden Discrimination': California University Joins National Trend To Protect Against Caste Bias On Campus</a>
                </div>
                <div className="flex">
                    <img className="md:w-[10rem] mb-3 mr-3 w-[6rem]" src="https://media.cnn.com/api/v1/images/stellar/prod/220127184201-san-diego-state-university-file-2020-restricted.jpg?c=16x9&q=h_720,w_1280,c_fill" alt="" />
                    <a className="hover:underline opacity-50" target="_blank" href="https://edition.cnn.com/2022/01/30/us/csu-caste-protections-universities-cec/index.html">Colleges And Universities Across The US Are Moving To Ban Caste Discrimination</a>
                </div>
                <div className="flex">
                    <img className="md:w-[10rem] mb-3 mr-3 w-[6rem] " src="https://association-webpage.sajannepali.repl.co/images/news4.jpg" alt="" />
                    <a className="hover:underline opacity-50" target="_blank" href="https://www.reuters.com/business/sustainable-business/caste-california-tech-giants-confront-ancient-indian-hierarchy-2022-08-15/">
Caste In California: Tech Giants Confront Ancient Indian Hierarchy</a>
                </div>
                <div className="flex">
                    <img className="md:w-[10rem] mb-3 mr-3 w-[6rem] " src="https://association-webpage.sajannepali.repl.co/images/news4.jpg" alt="" />
                    <a className="hover:underline opacity-50" target="_blank" href="https://www.youtube.com/watch?v=IhlvsD6KqFs">
Caste In California: Tech Giants Confront Ancient Indian Hierarchy</a>
                </div>
                <div className="flex">
                    <img className="md:w-[10rem] mb-3 mr-3 w-[6rem] " src="https://association-webpage.sajannepali.repl.co/images/news4.jpg" alt="" />
                    <a className="hover:underline opacity-50" target="_blank" href="https://www.youtube.com/watch?v=IhlvsD6KqFs">
Caste In California: Tech Giants Confront Ancient Indian Hierarchy</a>
                </div>
                <div className="flex">
                    <img className="md:w-[10rem] mb-3 mr-3 w-[6rem] " src="https://association-webpage.sajannepali.repl.co/images/news4.jpg" alt="" />
                    <a className="hover:underline opacity-50" target="_blank" href="https://www.youtube.com/watch?v=IhlvsD6KqFs">
Caste In California: Tech Giants Confront Ancient Indian Hierarchy</a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default News;
