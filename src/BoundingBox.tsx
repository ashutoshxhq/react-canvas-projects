import React, { useEffect, useRef, useState } from 'react'
import { parseString } from 'xml2js'

const BoundingBox = (props: any) => {

    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const canvasRef = useRef(null)
    const onMouseMove = (e: any) => {
        setMouseX(e.nativeEvent.offsetX);
        setMouseY(e.nativeEvent.offsetY);
    }

    const parseBound = (boundString: any) => {
        return boundString.split("][").map((item: any) => item.replaceAll("[", "").replaceAll("]", "")).map((item: any) => item.split(","))
    }

    useEffect(() => {
        let xml = `<hierarchy index="0" class="hierarchy" rotation="0" width="1440" height="2392">
        <android.widget.FrameLayout index="0" package="com.classengage.android" class="android.widget.FrameLayout" text="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[0,0][1440,2392]" displayed="true">
        <android.widget.ScrollView index="0" package="com.classengage.android" class="android.widget.ScrollView" text="" checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[0,84][1440,2322]" displayed="true">
        <android.widget.TextView index="0" package="com.classengage.android" class="android.widget.TextView" text="Welcome to" resource-id="com.classengage.android:id/welcome_text" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[536,858][905,951]" displayed="true"/>
        <android.widget.TextView index="1" package="com.classengage.android" class="android.widget.TextView" text="ClassEngage" resource-id="com.classengage.android:id/app_name_text" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[516,951][925,1044]" displayed="true"/>
        <android.widget.TextView index="2" package="com.classengage.android" class="android.widget.TextView" text="Login via OTP" resource-id="com.classengage.android:id/login_via_otp_text" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[549,1104][892,1180]" displayed="true"/>
        <android.widget.RelativeLayout index="3" package="com.classengage.android" class="android.widget.RelativeLayout" text="" resource-id="com.classengage.android:id/rlClickConsumer" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[144,1272][481,1413]" displayed="true">
        <android.widget.TextView index="0" package="com.classengage.android" class="android.widget.TextView" text=" US +1" resource-id="com.classengage.android:id/textView_selectedCountry" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[172,1300][369,1385]" displayed="true"/>
        </android.widget.RelativeLayout>
        <android.widget.EditText index="4" package="com.classengage.android" class="android.widget.EditText" text="Phone Number" resource-id="com.classengage.android:id/email_input" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="true" long-clickable="true" password="false" scrollable="false" selected="false" bounds="[499,1264][1345,1422]" displayed="true"/>
        <android.widget.TextView index="5" package="com.classengage.android" class="android.widget.TextView" text="Continue" resource-id="com.classengage.android:id/login_button" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[95,1468][1345,1636]" displayed="true"/>
        <android.widget.TextView index="6" package="com.classengage.android" class="android.widget.TextView" text="Signin via email" resource-id="com.classengage.android:id/signin_via_email" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[549,1685][891,1751]" displayed="true"/>
        <android.widget.TextView index="7" package="com.classengage.android" class="android.widget.TextView" text="I'm a Faculty" resource-id="com.classengage.android:id/faculty_button" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[468,1948][972,2099]" displayed="true"/>
        <android.widget.TextView index="8" package="com.classengage.android" class="android.widget.TextView" text="By joining our app, you agree to our" resource-id="com.classengage.android:id/joining_app_text" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[298,2190][1142,2256]" displayed="true"/>
        <android.widget.TextView index="9" package="com.classengage.android" class="android.widget.TextView" text="Terms of Service" resource-id="com.classengage.android:id/terms_of_service_text" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" long-clickable="false" password="false" scrollable="false" selected="false" bounds="[537,2256][904,2322]" displayed="true"/>
        </android.widget.ScrollView>
        </android.widget.FrameLayout>
        </hierarchy>`;



        parseString(xml, function (err, result) {
            console.log(JSON.stringify(result))
            // console.dir(parseBound(result.hierarchy["android.widget.FrameLayout"][0]["android.widget.ScrollView"][0]["$"].bounds));
        });
    }, [mouseX, mouseY])


    return (
        <div className="wrapper"><canvas className="bg-ss" onMouseMove={onMouseMove} width={1440} height={2392} style={{ border: '1px solid black' }} ref={canvasRef} {...props} /></div>
    )
}

export default BoundingBox
