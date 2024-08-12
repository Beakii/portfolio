import MaxWidthWrapper from "~/components/MaxWidthWrapper"
import HeroSection from "~/components/pseudoPages/HeroSection"
import ProjectSection from "~/components/pseudoPages/ProjectSection"

const HomePage = () => {
    return (
        <div className="h-screen w-full snap-y snap-mandatory overflow-y-auto bg-stone-900 text-white">
            <MaxWidthWrapper>
                <HeroSection className="snap-start" />

                <ProjectSection className="snap-start" />
                <ProjectSection className="snap-start" />
                <ProjectSection className="snap-start" />
                <ProjectSection className="snap-start" />
            </MaxWidthWrapper>
        </div>
    )
}

export default HomePage
