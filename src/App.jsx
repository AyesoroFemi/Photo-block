// import "./App.css";

import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-4 lg:mx-auto px-4 md:px-16 py-8 rounded-2xl bg-gray-200 mt-40">
        <h1 className="text-2xl md:text-3xl font-serif mt-4">
          Popular Collections
        </h1>
        <ul className="flex flex-wrap gap-2 mb-8 mt-4">
          <li className="bg-white py-1 px-2 rounded-lg text-sm font-semibold">
            Profile
          </li>
          <li className="bg-white py-1 px-2 rounded-lg text-sm font-semibold">
            New York
          </li>
          <li className="bg-white py-1 px-2 rounded-lg text-sm font-semibold">
            Relaxing
          </li>
          <li className="bg-white py-1 px-2 rounded-lg text-sm font-semibold">
            Person
          </li>
          <li className="bg-white py-1 px-2 rounded-lg text-sm font-semibold">
            Fashion
          </li>
        </ul>
        <div className="lg:flex gap-12">
          <Gallery
            centralImage="https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            leftImage="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1770&q=60"
            middleImage="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            rightImage="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
            title="People"
            count={144}
          />
          <Gallery
            centralImage="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            leftImage="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
            middleImage="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            rightImage="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            title="Nature"
            count={700}
          />
          <Gallery
            centralImage="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNpdGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            leftImage="https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            middleImage="https://plus.unsplash.com/premium_photo-1661886457733-2d936843cd70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
            rightImage="https://images.unsplash.com/photo-1604352704611-cce8fe2a4e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            title="Cities"
            count={40000}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
