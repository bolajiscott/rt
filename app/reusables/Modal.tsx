'use-client'

export function Modal({ setIsModalOpen }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white dark:bg-black p-8 rounded-lg w-[90%] max-w-lg">
          <h2 className="text-xl font-semibold">Upload Photo</h2>
          
          <button
            onClick={() => setIsModalOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8002 7.20001L7.2002 16.8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.2002 7.20001L16.8002 16.8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
        </div>
      </div>
    );
  }
  