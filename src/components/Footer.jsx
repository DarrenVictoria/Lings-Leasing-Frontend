import React from 'react'

function Footer() {
  return (

    <footer class="bg-gray-800 rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.lingscars.com/" class="hover:underline">LingsCars™</a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">Cars/Vans</a>
            </li>
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">Customers</a>
            </li>
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">Fun Stuff</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Live Staff</a>
            </li>
        </ul>
        </div>
    </footer>

  )
}

export default Footer