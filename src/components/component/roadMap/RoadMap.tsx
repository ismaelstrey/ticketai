export default function RoadMap() {
  return (
    <div className="flex flex-col bg-black p-8 items-center">
      <div className="flex flex-col justify-start border-l-4 py-4 border-red-500">
        <span className="w-6 h-6 -ml-4 rounded-full bg-red-500"></span>
        <div className="flex ml-3">
          <ul>
            <li>
              <span className="mt-2 text-white">Criado</span>
            </li>
            <li>
              <span className="mt-2 text-white">Criado a partir da api</span>
            </li>
            <li>
              <span>27/05/1986</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-end border-r-4 border-t-4 border-b-4 py-4 border-blue-500">
        <span className="w-6 h-6 -mr-4 rounded-full bg-blue-500 float-end"></span>
        <div className="flex ml-3">
          <ul>
            <li>
              <span className="mt-2 text-white">Iniciado</span>
            </li>
            <li>
              <span>27/05/1986</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-end border-r-4 border-t-4 border-b-4 py-4 border-blue-500">
        <span className="w-6 h-6 -mr-4 rounded-full bg-blue-500 float-end"></span>
        <div className="flex ml-3">
          <ul>
            <li>
              <span className="mt-2 text-white">Iniciado</span>
            </li>
            <li>
              <span>27/05/1986</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
