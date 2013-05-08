## jQuery navigate

jQuery 导航插件

### 怎么使用

	$('#navigate').navigate({
		index: 0, //默认为 0
		delay: 200, //默认为 200 毫秒
		items: [
			{
				name: '导航1',
				link: '链接1',
				target: '_blank', //默认为 _self
			},
			{
				name: '导航2',
				link: '链接2',
				children: [
					{
						name: '子导航1',
						link: '子链接1'
					},
					{
						name: '子导航2',
						link: '子链接2'
					}
				]
			},  
		]
	});
	
### 作者

blog: [wenzhixin.net.cn](http://wenzhixin.net.cn)

email: wenzhixin2010@gmail.com
