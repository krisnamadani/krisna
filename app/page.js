import { AiFillMail, AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md py-10">
      <div className="text-center">
        <h1 className="text-4xl font-semibold uppercase tracking-wider mb-1">
          <span className="text-sky-600">Krisna</span> Madani
        </h1>
        <p className="text-gray-500 font-semibold uppercase tracking-wider">
          Web Developer
        </p>
      </div>

      <hr class="h-px mt-8 mb-4 border-0 bg-gray-400" />

      <div className="flex flex-row justify-center gap-8">
        <a
          href="mailto:krisnamadani@gmail.com"
          className="text-sm text-gray-700 hover:text-sky-600"
        >
          <AiFillMail className="inline-block mr-1" />
          krisnamadani@gmail.com
        </a>
        <a href="#" className="text-sm text-gray-700 hover:text-sky-600">
          <AiFillLinkedin className="inline-block mr-1" />
          krisnamadani
        </a>
        <a href="#" className="text-sm text-gray-700 hover:text-sky-600">
          <AiFillInstagram className="inline-block mr-1" />
          krisnamadani
        </a>
        <a href="#" className="text-sm text-gray-700 hover:text-sky-600">
          <IoLocationSharp className="inline-block mr-1" />
          Pontianak, Kalimantan Barat
        </a>
      </div>

      <hr class="h-px mb-8 mt-4 border-0 bg-gray-400" />

      <div className="flex flex-row">
        <div className="basis-1/4">
          <span className="text-sky-600 uppercase font-semibold">Profile</span>
        </div>
        <div className="basis-3/4">
          <p className="text-gray-700">
            Hello, I&apos;m Krisna Madani. I have 2 years experience building
            and maintaining web application. Proficient in HTML, CSS,
            Javascript, PHP and Laravel. I have worked on several
            single-handedly projects and worked as back-end devleoper in under 6
            months. I&apos;ve also collaborated with other peoples to create web
            application.
          </p>
        </div>
      </div>

      <hr class="h-px my-8 border-0 bg-gray-400" />

      <div className="flex flex-row">
        <div className="basis-1/4">
          <span className="text-sky-600 uppercase font-semibold">
            Experience
          </span>
        </div>
        <div className="basis-3/4">
          <div className="mb-8">
            <div className="font-semibold mb-1">
              <span className="uppercase">IT Staff</span> -{" "}
              <span className="text-sky-600">Nov 2022 - Nov 2023</span>
            </div>
            <p className="text-gray-700 mb-1">
              PT. Eannovate Creative Technology / Jakarta
            </p>
            <ul className="list-disc list-outside ml-4">
              <li className="text-gray-700">
                Collaborated building web application using PHP and Laravel.
              </li>
              <li className="text-gray-700">
                Helped to improve and maintain existing web application.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="font-semibold mb-1">
              <span className="uppercase">Back-End Developer</span> -{" "}
              <span className="text-sky-600">Feb 2022 - Jul 2022</span>
            </div>
            <p className="text-gray-700 mb-1">
              PT. Medika Digitalisasi Indonesia / Pontianak
            </p>
            <ul className="list-disc list-outside ml-4">
              <li className="text-gray-700">
                Designed and developed database structure.
              </li>
              <li className="text-gray-700">
                Created REST API for front-end application and developed web
                application using Laravel.
              </li>
            </ul>
          </div>

          <div className="mb-0">
            <div className="font-semibold mb-1">
              <span className="uppercase">Freelancer</span> -{" "}
              <span className="text-sky-600">Sep 2020 - Dec 2021</span>
            </div>
            <p className="text-gray-700 mb-1">Pontianak</p>
            <ul className="list-disc list-outside ml-4">
              <li className="text-gray-700">
                Design and develop web application for client.
              </li>
              <li className="text-gray-700">
                Created Elman Recurrent Neural Network, K-Modes, KNN, Naive
                Bayes and C4.5 algorithm from scratch using Python and PHP.
              </li>
              <li className="text-gray-700">
                Developed firmware for IoT device using Arduino. Make it able to
                connect to the internet and perform update over the air.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="h-px my-8 border-0 bg-gray-400" />

      <div className="flex flex-row">
        <div className="basis-1/4">
          <span className="text-sky-600 uppercase font-semibold">
            Education
          </span>
        </div>
        <div className="basis-3/4">
          <div className="mb-0">
            <div className="font-semibold mb-1">
              <span className="uppercase">Bachelor of Computer Science</span> -{" "}
              <span className="text-sky-600">Agu 2017 - Jul 2022</span>
            </div>
            <p className="text-gray-700 mb-1">
              Computer Systems Engineering, Tanjungpura University / Pontianak
            </p>
            <ul className="list-disc list-outside ml-4">
              <li className="text-gray-700">GPA: 3.83</li>
              <li className="text-gray-700">
                Graduated with cum laude predicate.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="h-px my-8 border-0 bg-gray-400" />

      <div className="flex flex-row">
        <div className="basis-1/4">
          <span className="text-sky-600 uppercase font-semibold">Skills</span>
        </div>
        <div className="basis-3/4">
          <div className="mb-8">
            <div className="font-semibold mb-1">
              <span className="uppercase">Technical Skills</span>
            </div>
            <ul className="list-disc list-outside ml-4">
              <li className="text-gray-700">
                <span className="font-semibold">Programming Languages</span>:
                PHP, Javascript, Python
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Frameworks</span>: Laravel,
                Bootstrap
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Database</span>: MySQL
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Others</span>: Git, Linux
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="font-semibold mb-1">
              <span className="uppercase">Soft Skills</span>
            </div>
            <div className="text-gray-700">
              Communication, Teamork, Problem Solving
            </div>
          </div>

          <div className="mb-0">
            <div className="font-semibold mb-1">
              <span className="uppercase">Im Currently Learning About</span>
            </div>
            <div className="text-gray-700">
              Flask, GoLang, Flutter, NodeJS, ReactJS, NextJS, TailwindCSS,
              Docker, PostgreSQL, MongoDB
            </div>
          </div>
        </div>
      </div>

      <hr class="h-px my-8 border-0 bg-gray-400" />

      <div className="flex flex-row">
        <div className="basis-1/4">
          <span className="text-sky-600 uppercase font-semibold">
            Certifications
          </span>
        </div>
        <div className="basis-3/4">
          <div className="mb-0">
            <div className="font-semibold mb-1">
              <span className="uppercase">
                Become a Back-End Web Developer
              </span>{" "}
              - <span className="text-sky-600">Feb 2021</span>
            </div>
            <div className="text-gray-700">
              Dicoding -{" "}
              <a href="" className="text-gray-700 hover:text-sky-600">
                dicoding.com/certificates
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr class="h-px my-8 border-0 bg-gray-400" />

      <div className="flex flex-row">
        <div className="basis-1/4">
          <span className="text-sky-600 uppercase font-semibold">Projects</span>
        </div>
        <div className="basis-3/4">
          <div className="mb-8">
            <div className="font-semibold mb-1">
              <span className="uppercase">
                Github
              </span>
            </div>
            <div className="text-gray-700">
              <a href="https://github.com/krisnamadani" className="text-gray-700 hover:text-sky-600">
                <AiFillGithub className="inline-block mr-1" />
                github.com/krisnamadani
              </a>
            </div>
          </div>

          <div className="mb-0">
            <div className="font-semibold mb-1">
              <span className="uppercase">Crud with Laravel</span>
            </div>
            <p className="text-gray-700 mb-1">
              Simple create read update delete (crud) data with laravel
            </p>
            <ul className="list-disc list-outside ml-4">
              <li className="text-gray-700">
                <span className="font-semibold">Repository</span>: <a href="" className="text-gray-700 hover:text-sky-600">github.com/krisnamadani/laravel-crud</a>
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Demo</span>: <a href="" className="text-gray-700 hover:text-sky-600">demo.krisna.me/laravel-crud</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="h-px mt-8 border-0 bg-gray-400" />

      <div className="text-gray-700 text-sm text-center mt-10">
        Made with ❤️ by me - 2023
      </div>
    </div>
  );
}
