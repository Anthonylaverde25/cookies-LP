export default function SocialFloating() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <a
        className="flex h-12 w-12 items-center justify-center rounded-full bg-background-light text-text-light shadow-lg transition-transform hover:scale-110 dark:bg-background-dark dark:text-text-dark"
        href="#"
      >
        <span className="sr-only">WhatsApp</span>
        <svg
          className="h-6 w-6"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
      <a
        className="flex h-12 w-12 items-center justify-center rounded-full bg-background-light text-text-light shadow-lg transition-transform hover:scale-110 dark:bg-background-dark dark:text-text-dark"
        href="#"
      >
        <span className="sr-only">Instagram</span>
        <svg
          className="h-6 w-6"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
      </a>
      <a
        className="flex h-12 w-12 items-center justify-center rounded-full bg-background-light text-text-light shadow-lg transition-transform hover:scale-110 dark:bg-background-dark dark:text-text-dark"
        href="#"
      >
        <span className="sr-only">TikTok</span>
        <svg
          className="h-6 w-6"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-2.7-1.7-5.5-2.5-8.3-3.1-1.4.5-2.3 1.1-3.1 1.9-2.2 2-2.7 4.3-3.1 6.6-.4 2.3-.5 4.7-.5 7.1 0 0 .5-2.3 1.4-4.1 1.4-2.8 3.5-5.2 6.1-7.1 2.3-1.7 4.9-3 7.7-4.1z"></path>
        </svg>
      </a>
    </div>
  );
}
