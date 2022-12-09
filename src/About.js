import { useState } from "react";
const About = () => {
  const [data, setData] = useState(false);
  let value = "see more";
  if(data){
    value = "hide members";
  }
  const handleList = () => {
    setData(!data);
  };
  return (
    <>
      <div className="w-[85%] mx-auto">
        <div>
          <h2 className="text-3xl my-5 font-bold">About Us</h2>
          <p className="indent-10 mb-5">
            NAPA is a non-profit community organization. It was formally
            established in 2020 in the United States of America. Aiming to unify
            scattered brothers and sisters together, it will work for community
            upliftment. The mission of the organization shall be to preserve
            Nepali identity by promoting Nepali cultural and social events
            through the cooperation of Nepalese and American communities, to
            foster closer contacts among Pariyar individuals, families, and
            friends in the United States and in Nepal, to provide financial and
            non-financial support to Nepalese in need, and to explore and build
            a cooperative relationship for mutual benefits and advancement with
            other world citizens and associations.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="font-bold underline mb-5 text-2xl">
            PRINCIPAL ACTIVITIES
          </h2>
          <ul className="list-decimal ml-6">
            <li>
              To promote close cooperation among Pariyar Community in the USA.
            </li>
            <li>
              To preserve and promote Nepalese Pariyar identity and culture
            </li>
            <li>
              To contribute to the overall well-being of Nepalese Pariyar
              communities in the USA and Nepal.
            </li>
            <li>
              To promote social and charitable activities to help Nepalese
              Pariyar communities in the USA and Nepal.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[90%] mx-auto p-4">
        <div>
          <h2 className="text-xl md:text-3xl font-semibold mb-3 md:text-left text-center">
            Members of Neplease - American Paiyar Association
          </h2>
          <div className="ml-5 mb-3">
            <h2 className="font-bold text-xl">Executive Committee and members</h2>
            <div>
              <span className="font-bold ml-4">President-</span>
              <span>Saroj Pariyar</span>
            </div>
            <div>
              <span className="font-bold ml-4">Vice President-</span>
              <span>Lal Bahadur Sundas</span>
            </div>
            <div>
              <span className="font-bold ml-4">General Secretary-</span>
              <span>Om Bahadur Adhikari</span>
            </div>
            <div>
              <span className="font-bold ml-4">Secretary-</span>
              <span>Surya Bahadur Sunam</span>
            </div>
            <div>
              <span className="font-bold ml-4">Treasurer-</span>
              <span>Bharat Pariyar</span>
            </div>
          </div>
          <div className="ml-5 mb-3">
            <h2 className="font-bold text-xl">Advisory Board</h2>
            <div>
              <ul className="list-decimal ml-6">
                <li>Prem Pariyar</li>
                <li>Dr. Bishnu Maya Nepali</li>
                <li> Bhadraman Mote</li>
                <li>Mamita Nepali</li>
                <li>Dilip Nepali </li>
              </ul>
            </div>
          </div>
          <div className="ml-5 mb-3">
            <h2 className="font-bold text-xl">Technical Advisor</h2>
            <div>
              <ul className="list-decimal ml-6">
                <li>Sandesh Nepali</li>
                <li>Ram Krishna Pariyar</li>
              </ul>
            </div>
          </div>
          <div className="ml-5 mb-3">
            <h2 className="font-bold text-xl">Board Members</h2>
            <div>
              <ul className="list-decimal ml-6">
                <li>Sandesh Nepali</li>
                <li>Kaji Sunam Darji</li>
                <li>Krishna Sonam</li>
                <li>Dimpal Pariyar</li>
                <li>Sapana Pariyar</li>
                <li>Laxmi Tikhatri</li>
                <li>Sagar Kumar Darnal</li>
                <li>Bishwanath Darnal</li>
                <li>Kajiman Siwa</li>
                <li>Binod Darji</li>
              </ul>
            </div>
          </div>
          <div className="hover:underline hover:text-blue-500 cursor-pointer"  onClick={handleList}>View the list of all member below-</div>
          <ul className="list-decimal capitalize ml-8">
            <li className={!data ? "hidden" : ""}>sapna pariyar</li>
            <li className={!data ? "hidden" : ""}> saraswati pariyar</li>
            <li className={!data ? "hidden" : ""}>shanta pariyar</li>
            <li className={!data ? "hidden" : ""}> shanti sunam</li>
            <li className={!data ? "hidden" : ""}>shekhar raj mote</li>
            <li className={!data ? "hidden" : ""}>shristhi shahi</li>
            <li className={!data ? "hidden" : ""}>siddhanta pariyar</li>
            <li className={!data ? "hidden" : ""}>pradipta pariyar</li>
            <li className={!data ? "hidden" : ""}>provin pariyar</li>
            <li className={!data ? "hidden" : ""}>pushpa damai</li>
            <li className={!data ? "hidden" : ""}>rabin shiwa</li>
            <li className={!data ? "hidden" : ""}>raj kapoor</li>
            <li className={!data ? "hidden" : ""}>raju mothey</li>
            <li className={!data ? "hidden" : ""}>ram sharan pariyar</li>
            <li className={!data ? "hidden" : ""}>ramesh razz romiyo</li>
            <li className={!data ? "hidden" : ""}> rekha pariyar</li>
            <li className={!data ? "hidden" : ""}> roji karki bagdas</li>
            <li className={!data ? "hidden" : ""}>rosna pariyar</li>
            <li className={!data ? "hidden" : ""}>s ru xinal</li>
            <li className={!data ? "hidden" : ""}>saa nuu nepali</li>
            <li className={!data ? "hidden" : ""}>sagar darnal</li>
            <li className={!data ? "hidden" : ""}> samira siwa</li>
            <li className={!data ? "hidden" : ""}>sammy sanroji</li>
            <li className={!data ? "hidden" : ""}> sangita hingmang</li>
            <li className={!data ? "hidden" : ""}>sangita hingmang</li>
            <li className={!data ? "hidden" : ""}>sanjayalal sundas</li>
            <li className={!data ? "hidden" : ""}>santosh lakher</li>
            <li className={!data ? "hidden" : ""}>santosh nepali</li>
            <li className={!data ? "hidden" : ""}>kumar darnal</li>
            <li className={!data ? "hidden" : ""}>laxmi pariyar</li>
            <li className={!data ? "hidden" : ""}>laxmi tikhatri</li>
            <li className={!data ? "hidden" : ""}>mameeta santosh</li>
            <li className={!data ? "hidden" : ""}>manish sunam</li>
            <li className={!data ? "hidden" : ""}>mina vitrakoti</li>
            <li className={!data ? "hidden" : ""}>narayan pariyar</li>
            <li className={!data ? "hidden" : ""}> narendra pyasi</li>
            <li className={!data ? "hidden" : ""}>dilipkumar nepali</li>
            <li className={!data ? "hidden" : ""}>om adhikari</li>
            <li className={!data ? "hidden" : ""}>prakash pariyar</li>
            <li className={!data ? "hidden" : ""}>pradeep pariyar thapa</li>
            <li className={!data ? "hidden" : ""}>nirmal jairu</li>
            <li className={!data ? "hidden" : ""}>binod shahi</li>
            <li className={!data ? "hidden" : ""}>bishnu maya pariyar</li>
            <li className={!data ? "hidden" : ""}>bishwanth darnal</li>
            <li className={!data ? "hidden" : ""}>deepak pariyar</li>
            <li className={!data ? "hidden" : ""}>dhruba kumar pariyar</li>
            <li className={!data ? "hidden" : ""}>dimple pariyar</li>
            <li className={!data ? "hidden" : ""}> dipak nepali</li>
            <li className={!data ? "hidden" : ""}>gautam manisha</li>
            <li className={!data ? "hidden" : ""}> govind ram pariyar</li>
            <li className={!data ? "hidden" : ""}>indira sunam jay</li>
            <li className={!data ? "hidden" : ""}>kumar pariyar</li>
            <li className={!data ? "hidden" : ""}>kaji sunam</li>
            <li className={!data ? "hidden" : ""}>kamal pariyar babul</li>
            <li className={!data ? "hidden" : ""}>kanhaiya singh pariyar</li>
            <li className={!data ? "hidden" : ""}>karna sunam akela</li>
            <li className={!data ? "hidden" : ""}>kiran pariyar</li>
          </ul>
          <button
            onClick={handleList}
            className="capitalize w-18 md:w-[10rem] bg-slate-500 text-blue-200 px-4 py-2 mt-4"
          >
            {value}
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
