"use client";

import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function DownloadButton() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume/Eustache_Katembo_Resume.pdf";
    link.download = "Eustache_Katembo_Resume.pdf";
    link.click();
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2 w-[300px]"
      onClick={handleDownloadCV}
    >
      <span>Download Resume</span>
      <FiDownload className="text-xl" />
    </Button>
  );
}