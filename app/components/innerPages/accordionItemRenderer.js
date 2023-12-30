const AccordionItemRenderer = (data, item) => {
  console.log(data, item);
  switch (item) {
    case 0:
      return (
        <>
          <div>Case item</div>
        </>
      );
    default:
      return (
        <>
          <div>defaul item</div>
        </>
      );
  }
};

export default AccordionItemRenderer;
