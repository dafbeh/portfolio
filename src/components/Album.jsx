const Album = () => {
    return (
        <div className="flex justify-center items-center gap-2 p-2">
            <svg className='hover:stroke-white cursor-pointer' xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" stroke="#9cafa3" stroke-linecap="round" 
                stroke-linejoin="round" stroke-width="2">
                <path d="m12 19-7-7 7-7M19 12H5"/></svg>

            <div className="object-contain min-w-[200px] w-[600px] select-none border-1 rounded-lg">
                <img className="rounded-lg" src="Sync/Sync-1.png"></img>
            </div>

            <svg className='hover:stroke-white cursor-pointer' xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" fill="none" stroke="#9cafa3" stroke-linecap="round" 
                stroke-linejoin="round" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
    );
}
export default Album;