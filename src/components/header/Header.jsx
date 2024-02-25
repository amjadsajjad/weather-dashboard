import { useState } from "react";
import Favorite from "./Favorite";
import FavoriteModal from "./FavoriteModal";
import Logo from "./Logo";
import SearchLoacation from "./SearchLoacation";

const Header = () => {
    const [showFavModal, setShowFavModal] = useState(false);
    return (
        <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
            <nav className="container flex items-center justify-between py-6">
                <Logo></Logo>

                <div className="flex items-center gap-4 relative">
                    <SearchLoacation />
                    <Favorite onShow={() => setShowFavModal(!showFavModal)} />
                    {
                        showFavModal && <FavoriteModal />
                    }

                </div>
            </nav>
        </header>
    );
};

export default Header;