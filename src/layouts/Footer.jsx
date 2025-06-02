export default function Footer() {

    const getDate = new Date();
    return (
        <footer className="bg-white shadow-sm dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">{getDate.getFullYear()} <a href="https://flowbite.com/" class="hover:underline"></a> All Rights Reserved.</span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                             <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
            </div>
        </footer>
    )
}