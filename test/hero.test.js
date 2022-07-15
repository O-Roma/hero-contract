const Hero = artifacts.require("Hero");
contract('Hero', (accounts) => {
    let hero
    before(async () => {
        hero = await Hero.deployed()
    
      })
    
      it('It should return Superman', async () => {
        const receivedHero = await hero.getHero() 
        assert.equal(receivedHero, "Superman")
      })

      it('It should set hero to Hulk',async()=>{
          await hero.setHero("Hulk",{from:accounts[0]})
          const receivedHero = await hero.getHero()
          assert.equal(receivedHero,"Hulk")
      })
      
});