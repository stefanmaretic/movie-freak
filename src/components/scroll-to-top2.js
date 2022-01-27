import { ChevronUpIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  return null;
}

export function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  // Button is displayed after scrolling for 300 pixels
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <IconButton
          aria-label="Scroll to top"
          icon={<ChevronUpIcon />}
          colorScheme="yellow"
          onClick={scrollToTop}
        />
      )}
    </>
  );
}
