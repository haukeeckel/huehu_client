function SideCards() {
  return (
    <div className="hidden xl:block box-border max-w-screen-xl">
      <div className="fixed -left-36 top-[10%] w-52 rotate-[30deg] hover:rotate-[15deg] hover:-left-9 transition-all duration-100">
        <img src="/images/cards/squirtle.png" />
      </div>
      <div className="fixed -left-36 top-[25%] w-52 rotate-[30deg] hover:rotate-[15deg] hover:-left-9 transition-all duration-100">
        <img src="/images/cards/mew.png" />
      </div>
      <div className="fixed -left-32 top-[40%] w-52 rotate-[35deg] hover:rotate-[15deg] hover:-left-12 transition-all duration-100">
        <img src="/images/cards/magikarp.png" />
      </div>
      <div className="fixed -left-36 top-[55%] w-52 rotate-[25deg] hover:rotate-[10deg] hover:-left-8 transition-all duration-100">
        <img src="/images/cards/snorlax.png" />
      </div>
      <div className="fixed -left-36 top-[70%] w-52 rotate-[15deg] hover:rotate-[5deg] hover:-left-8 transition-all duration-100">
        <img src="/images/cards/slowking.png" />
      </div>
    </div>
  );
}

export default SideCards;
