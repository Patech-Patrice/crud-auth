import React from 'react'
import './Dashboard.css'
import ImgAsset from '../public'
import Logo from "./Logo"
import NavList from "./NavList"
import Filter_1 from "./Filter_1"
import more from "./more"
import CircleChart from "./CircleChart"
import Card from "./Card"
import search from "./search"
import bell from "./bell"
import chevrondown from "./chevrondown"
import arrows from "./arrows"
import Status from "./Status"
import more_1 from "./more_1"
import Status_Delivery from "./Status_Delivery"
export default function Dashboard () {
	return (
		<div className='Dashboard_Dashboard'>
			<Logo className='Logo'/>
			<div className='BottomMenu'>
				<NavList className='NavList'/>
				<NavList className='NavList_1'/>
				<NavList className='NavList_2'/>
			</div>
			<div className='TopMenu'>
				<NavList className='NavList_3'/>
				<NavList className='NavList_4'/>
				<NavList className='NavList_5'/>
				<NavList className='NavList_6'/>
				<NavList className='NavList_7'/>
			</div>
			<div className='Charts'>
				<div className='LineChart'>
					<div className='Title'>
						<span className='ClusterAnalytics'>Cluster Analytics</span>
						<div className='RightElements'>
							<div className='Legend'>
								<div className='legend1'>
									<div className='Ellipse3'/>
									<span className='Offlineorders'>Offline orders</span>
								</div>
								<div className='legend2'>
									<div className='Ellipse4'/>
									<span className='Onlineorders'>Online orders </span>
								</div>
								<Filter_1 className='Filter'/>
							</div>
						</div>
					</div>
					<div className='Table'>
						<div className='Table_1'>
							<div className='Frame114'>
								<div className='Line'>
									<span className='_100'>100</span>
									<img alt='' className='Line9' src = {ImgAsset.Dashboard_Line9} />
								</div>
								<div className='Line_1'>
									<span className='_80'>80</span>
									<img alt='' className='Line9_1' src = {ImgAsset.Dashboard_Line9_1} />
								</div>
								<div className='Line_2'>
									<span className='_60'>60</span>
									<img alt='' className='Line9_2' src = {ImgAsset.Dashboard_Line9_2} />
								</div>
								<div className='Line_3'>
									<span className='_40'>40</span>
									<img alt='' className='Line9_3' src = {ImgAsset.Dashboard_Line9_3} />
								</div>
								<div className='Line_4'>
									<span className='_20'>20</span>
									<img alt='' className='Line9_4' src = {ImgAsset.Dashboard_Line9_4} />
								</div>
								<div className='Line_5'>
									<span className='_0'>0</span>
									<img alt='' className='Line9_5' src = {ImgAsset.Dashboard_Line9_5} />
								</div>
							</div>
							<div className='Month'>
								<span className='Jan'>Jan</span>
								<span className='Feb'>Feb</span>
								<span className='Mar'>Mar</span>
								<span className='Apr'>Apr</span>
								<span className='May'>May</span>
								<span className='Jun'>Jun</span>
								<span className='Jul'>Jul</span>
							</div>
						</div>
						<img alt='' className='Bg' src = {ImgAsset.Dashboard_Bg} />
						<img alt='' className='Chart1' src = {ImgAsset.Dashboard_Chart1} />
						<img alt='' className='Chart2' src = {ImgAsset.Dashboard_Chart2} />
						<div className='Ellipse12'/>
						<div className='Info'>
							<div className='Info_1'>
								<div className='Frame115'>
									<span className='_15Aug2022'>15 Aug 2022</span>
									<span className='_5949210'>$59,492.10</span>
								</div>
							</div>
							<img alt='' className='Pin' src = {ImgAsset.Dashboard_Pin} />
						</div>
					</div>
				</div>
				<div className='CircleChart'>
					<div className='Chart'>
						<div className='Header'>
							<span className='Earnings'>Earnings</span>
							<span className='more'/>
						</div>
						<CircleChart className='CircleChart_1'/>
						<div className='Legend_1'>
							<div className='legend1_1'>
								<div className='Ellipse3_1'/>
								<span className='Offline'>Offline</span>
							</div>
							<div className='legend2_1'>
								<div className='Ellipse4_1'/>
								<span className='Online'>Online </span>
							</div>
							<div className='legend3'>
								<div className='Ellipse4_2'/>
								<span className='Trade'>Trade</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='Cards'>
				<Card className='Card'/>
				<img alt='' className='Divider_1' src = {ImgAsset.Dashboard_Divider_1} />
				<Card className='Card_1'/>
				<img alt='' className='Divider_2' src = {ImgAsset.Dashboard_Divider_2} />
				<Card className='Card_2'/>
				<img alt='' className='Divider_3' src = {ImgAsset.Dashboard_Divider_3} />
				<Card className='Card_3'/>
			</div>
			<div className='Header_1'>
				<div className='TitleSubtitle'>
					<span className='WelcomeBackMark'>Welcome Back, Maria</span>
					<span className='Hereistheinformationaboutyourclusters'>Here is the information about your clusters</span>
				</div>
				<div className='Elements'>
					<div className='Icons'>
						<span className='search'/>
						<div className='bell'>
							<span className='bell_1'/>
							<img alt='' className='indicator' src = {ImgAsset.Dashboard_indicator} />
						</div>
					</div>
					<div className='Profile'><div className='avatar' style={{backgroundImage: `url(${ImgAsset.Dashboard_avatar})`}}/>
						<div className='text'>
							<span className='MarkJones'>Maria Jones</span>
							{/* <chevrondown className='chevrondown'/> */}
						</div>
					</div>
				</div>
			</div>
			<div className='OrderList'>
				<div className='Frame78'>
					<span className='OrderList_1'>Order List</span>
					<Filter_1 className='Filter_1'/>
				</div>
				<div className='Table_2'>
					<div className='Header_2'>
						<span className='No'>No</span>
						<span className='Date'>Date</span>
						<span className='Location'>Location</span>
						<span className='Action'>Action</span>
						<div className='ID'>
							<span className='ID_1'>ID</span>
							<span className='arrows'/>
						</div>
						<div className='CustomerName'>
							<span className='CustomerName_1'>Customer Name</span>
							<span className='arrows_1'/>
						</div>
						<div className='Amount'>
							<span className='Amount_1'>Amount</span>
							<span className='arrows_2'/>
						</div>
						<div className='StatusOrder'>
							<span className='StatusOrder_1'>Status Order</span>
							<span className='arrows_3'/>
						</div>
					</div>
					<div className='Row1'>
						<span className='_1'>1</span>
						<span className='Dec12021'>Dec 1, 2021</span>
						<span className='_312SWilmetteAve'>312 S Wilmette Ave</span>
						<span className='_12594'>#12594</span>
						<div className='CustomerName_2'>
							<span className='FrankMurlo'>Frank Murlo</span>
						</div>
						<div className='CustomerName_3'>
							<span className='_84769'>$847.69</span>
						</div>
						<Status className='Status'/>
						{/* <more_1 className='more_1'/> */}
					</div>
					<div className='Row2'>
						<span className='_2'>2</span>
						<span className='Nov152021'>Nov 15, 2021</span>
						<span className='LathropAveHarvey'>Lathrop Ave, Harvey</span>
						<span className='_12490'>#12490</span>
						<div className='CustomerName_4'>
							<span className='ThomasBleir'>Thomas  Bleir</span>
						</div>
						<div className='CustomerName_5'>
							<span className='_47714'>$477.14</span>
						</div>
						<div className='Status_1'>
							<Status_Delivery className='Status_Delivery'/>
						</div>
						{/* <more_1 className='more_2'/> */}
					</div>
					<div className='Row3'>
						<span className='_3'>3</span>
						<span className='Nov022021'>Nov 02, 2021</span>
						<span className='_5685BruceAvePortage'>5685 Bruce Ave, Portage</span>
						<span className='_12306'>#12306</span>
						<div className='CustomerName_6'>
							<span className='BillNorton'>Bill Norton</span>
						</div>
						<div className='CustomerName_7'>
							<span className='_47714_1'>$477.14</span>
						</div>
						{/* <more_1 className='more_3'/> */}
						<Status_Delivery className='Status_Delivery_1'/>
					</div>
				</div>
			</div>
		</div>
	)
}