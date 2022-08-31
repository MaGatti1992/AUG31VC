<aura:application extends="force:slds">
    <aura:handler name="nickName" event="c:LightningFirstEvent" action="{!c.checkMe}"/>
    <c:LightningFirstEventParentComponent />
</aura:application>