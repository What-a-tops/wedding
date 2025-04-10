import React from "react";
import Semi from "../../Title/semi";
import SemiTitle from "../../Title/SemiTitle";
import SemiHeader from "../../Title/SemiHeader";
import ItalicTitle from "../../Title/italicTitle";

const index = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="text-center">
        <SemiHeader value="Officiating Minister" />
        <Semi value="Rev. Jayvee M. Tolibas" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center text-xs sm:text-sm md:text-base">
        <div>
          <SemiTitle value="Parents of the Groom" />
          <Semi value="MR. Joseph C. Dapadap" />
          <Semi value="MRS. MANIT B. DAPADAP" />
        </div>
        <div>
          <SemiTitle value="Parents of the Bride" />
          <Semi value="MR. SALES C. MENDROS" />
          <Semi value="MRS. NENA A. MENDROS" />
        </div>
      </div>

      <div className="text-center">
        <SemiHeader value="Principal Sponsors" />
        <SemiTitle
          value={`"With us are the people we believe to stand and bear witness to the
          love that grows between us"`}
          className="text-[14px] mt-2"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs uppercase text-gray-800">
        <div>
          <Semi value="MR. NOEL TOLIBAS" />
          <Semi value="MR. JOSEPH A. TABUAC" />
          <Semi value="MR. ANGELO MICHAEL M. DACUT" />
          <Semi value="MR. RODEL E. QUILBIO" />
          <Semi value="MR. ROBERT FERMIN" />
        </div>
        <div>
          <Semi value="REV. JAYVEE M. TOLIBAS" />
          <Semi value="MRS. NANCYLEL T. TABUAC" />
          <Semi value="MRS. LEA C. DACUT" />
          <Semi value="MRS. LILY MAE G. QUILBIO" />
          <Semi value="MRS. HENEDINE MAE R. FERMIN" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 text-center">
        <div>
          <SemiHeader value="Secondary Sponsors" />
          <SemiTitle value="To light our path with the Candles of Faith" />
          <Semi value="MR. ABELARDO M. BACNUTAN & MRS. ROSA MAE S. BACNUTAN" />
        </div>
        <div>
          <SemiTitle value="To clothe us as one with the Veil of Hope" />
          <Semi value="MR. HERMOSO RIOLA & MRS. VIRGINIA RIOLA" />
        </div>
        <div>
          <SemiTitle value="To bind us together with the Cord of Love" />
          <Semi value="Atty. lysandre b. pelingon & mrs. susan dela peÑa" />
        </div>
      </div>
    </div>
  );
};

export default index;
