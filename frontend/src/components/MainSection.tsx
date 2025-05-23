import { Search} from '../components/Search';
import DisplayNl from './DisplayNl';
export function MainSection() {
    return (
        <main className='mt-16 px-10'>
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
                <link
                    rel="stylesheet"
                    as="style"
                    onLoad={(e) => {
                        e.currentTarget.rel = "stylesheet";
                    }}
                    href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Plus+Jakarta+Sans:wght@400;500;700;800"
                />
                <title>FeelsOnWheels</title>
                <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
                <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
            </head>

            <div
                className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden"
                style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
            >
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                            <div className="@container">
                                <div className="@[480px]:p-4">
                                    <div
                                        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://cdn.usegalileo.ai/sdxl10/73b25356-6519-4f41-b432-54a2644acdf0.png")',
                                        }}
                                    >
                                        <div className="flex flex-col gap-2 text-center">
                                            <h1 className="text-white font-black leading-tight tracking-[-0.033em] @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                                Pakistan First Car  Aggregation Listings Platform
                                            </h1>
                                            <h2 className="text-white font-normal leading-normal @[480px]:text-xl @[480px]:font-normal @[480px]:leading-normal">
                                                We provide Listings from Various Platforms
                                            </h2>
                                            <div className="flex justify-center items-center gap-2">
                                                <div className="w-20 h-20">  <img src="/images/pakwheels.png" alt="Car 1"  /></div>
                                                <div className=" w-24 h-18"><img src="/images/olx.png" alt="Car 1"  /></div>
                                                <div className="w-26 h-26"><img src="/images/wise.png" alt="Car 1"  /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-between gap-3 p-4">
                                <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">Search Cars</p>
                            </div>

                            <div className="flex max-w-[1080px] flex-wrap items-end gap-4 px-4 py-3">
                            <Search />
                            </div>
                            <DisplayNl/>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
