import React from "react";
import styles from "./CVYearTitleDescription.module.css";
import CVUList from "../CVUList/CVUList";
import CVHeadlineSection from "../CVHeadlineSection/CVHeadlineSection";

export default function CVYearTitleDescriptionType({
  title,
  direction,
  items,
}) {
  return (
    <>
      <CVHeadlineSection title={title} />
      <div className={direction === "row" ? styles.row : styles.column}>
        {items.map((item, index) =>
          item.title !== "" ? (
            <div
              key={index + 1}
              className={styles.subItemContainer}
              style={direction === "column" ? { width: "90%" } : {}}
            >
              <div className={styles.yearDiv}>{item.years}</div>
              <div className={styles.subItemNameAndDesc}>
                <h3 className={styles.subItemName}>{item.title}</h3>
                {item.descriptionType === "h3" && (
                  <h3
                    className={styles.subItemDesc}
                    style={item.years === "" ? { marginLeft: 0 } : {}}
                  >
                    {item.description[0]}
                  </h3>
                )}
                {item.descriptionType === "ul" && (
                  <CVUList strList={item.description} />
                )}
              </div>
            </div>
          ) : item.descriptionType !== "" ? (
            <div key={index + 1} className={styles.subItemNameAndDesc}>
              {item.descriptionType === "h3" && (
                <h3 className={styles.subItemDesc}>{item.description[0]}</h3>
              )}
              {item.descriptionType === "ul" && (
                <CVUList strList={item.description} />
              )}
            </div>
          ) : null
        )}
      </div>
    </>
  );
}
