import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SimpleTable from "./SimpleTable";
import FrontHeader from "./FrontHeader";
import MianHeader from "./MianHeader";
import { useEffect } from "react";

interface Props {
  data?: any,
  children?: JSX.Element
}

export default function SimpleAccordions(props: Props) {
  const [isExpanded, setIsExpended] = React.useState<boolean | false>(true);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [whichExpand, setWhichExpand] = React.useState("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(panel, "asdfccccccccc");
      if (panel) {
        setWhichExpand(panel);
        setExpanded(isExpanded ? panel : false);
      }
    };
  
  console.log(isExpanded, expanded, whichExpand, "pppppppppppp");

  return (
    <div>
      {props?.data?.map((item: any, index: number) => (
        <Accordion
          expanded={expanded == `panel${index + 1}`}
          onChange={handleChange( `panel${index + 1}`)}

          // onChange={handleChange(expanded ? "" : `panel${index + 1}`)}
          className="my-3"
          key={index}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                onClick={() => handleChange(`panel${index + 1}`)}
              />
            }
            aria-controls={`panel${index + 1}bh-content`}
            id={`panel${index + 1}}bh-header`}
          >
            {expanded && whichExpand === `panel${index + 1}` ? (
              <MianHeader data={item} />
            ) : (
              <FrontHeader data={item} />
            )}
          </AccordionSummary>
          <AccordionDetails>
            <SimpleTable  data={item?.Vintages||[]}/>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
