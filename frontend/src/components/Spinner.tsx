function Spinner() {
    return (
        <div className="flex justify-center items-center" style={{ height: "calc(100vh - 64px)" }}>
            <svg className="animate-spin h-8 w-8 text-green-600" viewBox="0 0 24 24">
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
            </svg>
        </div>
    );
};

export default Spinner;